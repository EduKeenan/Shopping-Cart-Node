const Joi = require('joi');

const joiCadastrarUsuario = Joi.object().keys({
    nome: Joi.string().alphanum().min(3).max(30).required(),
    sobrenome: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/))
});
module.exports = {
    joiCadastrarUsuario
};