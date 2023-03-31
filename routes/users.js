const express = require('express');///importar express
const UserController = require('../controllers/UserController');//autoimportación
const router = express.Router();///Creamos el router

router.post('/createUser', UserController.create);///ruta creada

module.exports = router;