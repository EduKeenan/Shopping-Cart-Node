/* Arquivo para definir o que a API espera de dados para cada requisição. */
const Joi = require('joi');

const cadastrarUsuarioData = Joi.object().keys({
    nome: Joi.string().alphanum().min(3).max(30).required(),
    sobrenome: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)).required()
});

const loginData = Joi.object().keys({
    email: Joi.string().email().required(),
    senha: Joi.string().required()
});
module.exports = {
    cadastrarUsuarioData,
    loginData
};