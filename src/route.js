const express = require('express')
const QuestionController = require('./controllers/QuestionController')

const route = express.Router() // a const route guarda todas as funcionalidades de Router que o express possui

route.get('/', (req, res) => res.render('index')) // a barra é pra pegar o arquivo inicial do projeto (index). Definição de rotas
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))
//Formato que o formulário de dentro da modal tem que passar a informação
route.post('/room/:room/:question/:action', QuestionController.index) // os : é uma variável pra receber o conteúdo que virá da outra pagina 
module.exports = route //exporta a constante route