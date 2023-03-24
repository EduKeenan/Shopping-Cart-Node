const express = require('express');
const router = express.Router();
const usuario = require(`./controllers/userController`);
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', new Date(Date.now()));
  next();
});

router.get('/', function(req, res) {
  res.send('Bem vindo a home!');
});

router.post('/cadastrarUsuario', usuario.cadastrarUsuario);

router.get('/*', function(req, res) {
  res.status(404).send('Rota não encontrada.');
});

module.exports = router;