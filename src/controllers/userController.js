const userController = {
    cadastrarUsuario : async function(req, res){
        let {body} = req;
        
        return res.status(201).json(body);
    }
};

module.exports = userController;