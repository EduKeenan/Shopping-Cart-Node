const {gerarHash} = require('../uteis/utils');
const model = require('../models/userModel');

const userController = {
    cadastrarUsuario : async function(req, res){
        let {body} = req;
        const {cadastrarUsuarioData} = require('../uteis/joy');
        try{
            await cadastrarUsuarioData.validateAsync(req.body);
        }catch(error){
            return res.status(400).json(error);
        }

        const emailExistente = await model.consultarEmail(body.email);
        if(emailExistente.status != 200 || emailExistente.data?.length === 1) return res.status(400).json({message: `O email ${body.email} já está cadastrado.`});

        body.senha = await gerarHash(body.senha);
        const result = await model.cadastrarUsuario(body);
        return res.status(result.status).json(result.message);
    }
};

module.exports = userController;