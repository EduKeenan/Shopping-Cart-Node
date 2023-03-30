const connection = require('./connection');
const userModule = {
    consultarEmail : async function(body){
        let result;
        try{
            result = await connection.execute(`SELECT id_usuario, email, senha
            FROM usuario WHERE email = '${body.email}';`);
        }catch(error){
            return {status: 500, data: `Erro interno do servidor.`};
        }
        return {status: 200, data: result[0]};
    },
    expirarToken : async function(token){
        let result;
        try{
            result = await connection.execute(`INSERT INTO expired_tokens
            (token)
            VALUES ('${token}');`);
        }catch(error){
            return {status: 500, data: `Erro interno do servidor.`};
        }
        return {status: 200, data: result[0]};
    },
    consultarLogout : async function(token){
        let result;
        try{
            result = await connection.execute(`SELECT id
            FROM expired_tokens WHERE token = '${token}';`);
        }catch(error){
            return {status: 500, data: `Erro interno do servidor.`};
        }
        return {status: 200, data: result[0]};
    }
};

module.exports = userModule;