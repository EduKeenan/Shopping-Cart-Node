
const {compararHash} = require('../uteis/utils');
const model = require('../models/loginModel');
const jwt = require('jsonwebtoken');
const userController = {
    login : async function(req, res){
        let {body} = req;
        const {loginData} = require('../uteis/joy');
        try{
            await loginData.validateAsync(req.body);
        }catch(error){
            return res.status(400).json(error);
        }
        const cadastro = await model.consultarEmail(body);
        
        if(cadastro.status !== 200) return res.status(500).json({message: cadastro.data}).end();
        if(cadastro.data.length == 0) return res.status(400).json({message: `Usuário com o email ${body.email} não está cadastrado.`}).end();

        const bateSenha = await compararHash(body.senha, cadastro.data[0]?.senha);
        if(!bateSenha) return res.status(401).end();
        
        const token = jwt.sign({id_usuario: cadastro.data[0].id_usuario}, process.env.JWT_SECRET, {expiresIn: 600});
        return res.status(200).json({auth: true, token});
    },
    logout : async function(req, res){
        const token = req.headers[`x-access-token`];
        const {expirarToken} = require(`../models/loginModel`);
        const result = await expirarToken(token);
        if(result.status != 200) return res.status(500).json({message: result.data}).end();
        return res.status(200).json({message: `Token expirado com sucesso.`});
    },
    consultarLogout : async function(token){
        const {consultarLogout} = require(`../models/loginModel`);
        const result = await consultarLogout(token);
        if(result.status != 200 || result.data?.length === 1) return false;
        return true;
    }
};

module.exports = userController;