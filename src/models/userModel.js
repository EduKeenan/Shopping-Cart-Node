const connection = require('./connection');
const userModule = {
    cadastrarUsuario : async function(body){
        try{
            await connection.execute(`INSERT INTO usuario
                (nome, email, sobrenome, senha)
                VALUES (
                '${body.nome}', 
                '${body.email}', 
                '${body.sobrenome}', 
                '${body.senha}')`);
        }catch(error){
            return {status: 500, message: `Erro SQL.`};
        }
        return {status: 201, message:`Usuário criado com sucesso em: ${new Date(Date.now())}`};
    }
};

module.exports = userModule;