const express = require('express')

const route = express.Router() // a const route guarda todas as funcionalidades de Router que o express possui

route.get('/', (req, res) => res.render('index')) // a barra é pra pegar o arquivo inicial do projeto (index). Definição de rotas
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

module.exports = route //exporta a constante route