const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() // a const route guarda todas as funcionalidades de Router que o express possui

route.get('/', (req, res) => res.render('index', {page: 'enter-room'})) // a barra é pra pegar o arquivo inicial do projeto (index). Definição de rotas
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index) // os : é uma variável pra receber o conteúdo que virá da outra pagina

module.exports = route //exporta a constante route