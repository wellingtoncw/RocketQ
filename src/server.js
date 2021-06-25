const express = require('express')
const route = require('./route') // como trata-se de um arquivo criado por mim, tenho que usar o ./ pra passar o caminho
const path = require('path') //módulo

const server = express() //inicializa o express e guarda na const server

server.set('view engine', 'ejs') // define pro express que a view engine é a ejs

server.use(express.static("public")) //usa a pasta onde ficam guardados os arquivos staticos

//define para o express que o caminho não é mais somente e pasta views mas o caminho roquetq/src/views
server.set('views', path.join(__dirname, 'views')) //path pega o caminho da pasta onde está o projeto. O join é de juntar. __dirname é uma variável global que se transforma na pasta onde o arquivo atual está. Ou seja, (__dirname = src/). No final junta a pasta view. Caminho final = rocketq/src/views

server.use(route) // express usando o arquivo route

server.listen(3000, () => console.log('RODANDO')) //arrow function significa falar pro js que iremos rodar uma funcionalidade