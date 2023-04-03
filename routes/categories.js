const express = require('express');///importar express
const CategoryController = require('../controllers/CategoryController');//autoimportación
const router = express.Router();///Creamos el router

router.post('/createCategory', CategoryController.create);///ruta creada

module.exports = router;