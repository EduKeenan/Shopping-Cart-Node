const express = require('express');
const router = express.Router();
const usuario = require('./controllers/userController');
const login = require('./controllers/loginController');
const {verify} = require('jsonwebtoken');

function verificarJWT(req, res, next){
  const token = req.headers['x-access-token'];
  verify(token, process.env.JWT_SECRET, async (erro, decoded) => {
    if(erro) return res.status(401).end();
    
    const expired_token = await login.consultarLogout(token);
    if(!expired_token) return res.status(401).end();
    
    req.id_usuario = decoded.id_usuario;
    next();
  });
}

router.get('/', function(req, res) {
  res.send('Bem vindo a home!');
});

// USUÁRIOS
router.post('/usuario/cadastrar', verificarJWT, usuario.cadastrarUsuario);

// LOGIN
router.post('/login', login.login);
router.post('/logout', verificarJWT, login.logout);

router.get('/*', function(req, res) {
  res.status(404).json({message: 'Rota não encontrada.'});
});

module.exports = router;