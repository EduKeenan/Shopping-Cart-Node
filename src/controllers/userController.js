const bcrypt = require('bcrypt');
const model = require('../models/userModel');

const userController = {
    cadastrarUsuario : async function(req, res){
        let {body} = req;
        const {joiCadastrarUsuario} = require('../uteis/joy');
        try{
            await joiCadastrarUsuario.validateAsync(req.body);
        }catch(error){
            return res.status(400).json(error);
        }
        body.senha = bcrypt.hashSync(body.senha, 10);
        const result = await model.cadastrarUsuario(body);
        return res.status(result.status).json(result.message);
    }
};

module.exports = userController;