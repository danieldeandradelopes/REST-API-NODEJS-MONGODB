const express = require('express');


const routes = express.Router();

const UserController = require('../controllers/UserController');

const UpdateStatusUser = require('../controllers/UpdateStatusUser');

//GET faz consultas no nosso banco de dados
routes.get('/users', UserController.consult);

//POST faz uma inserção no nosso banco dados
routes.post('/users', UserController.insert);

//DELETE faz a exclusão de um registro no banco de dados
routes.delete('/users/:id', UserController.delete);

routes.post('/statusUser/:id', UpdateStatusUser.updateStatus);



//exportando as rotas para que nós possamos ao importar o routes.js, possamos utilizar os métodos que foram roteados
module.exports = routes;