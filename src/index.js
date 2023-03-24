/*global process*/
/*eslint no-undef: "error"*/
const express = require('express');
const bodyParser = require('body-parser');
const rotas = require(`./router`);
const app = express();
require(`dotenv`).config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(rotas);

const porta = process.env.PORT || 3100;
app.listen(porta, () => 
    console.log(`Servidor rodando na porta ${porta}...`),
);
