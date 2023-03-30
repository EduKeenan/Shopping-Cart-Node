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
    },
    consultarEmail : async function(email){
        let result;
        try{
            result = await connection.execute(`SELECT id_usuario
            FROM usuario WHERE email = '${email}'`);
        }catch(error){
            return {status: 500, data: `Erro interno do servidor.`};
        }
        return {status: 200, data: result[0]};
    }
};

module.exports = userModule;