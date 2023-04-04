const express = require('express');///importar express
const CategoryController = require('../controllers/CategoryController');//autoimportación
const { route } = require('./users');
const router = express.Router();///Creamos el router

router.post('/createCategory', CategoryController.create);///ruta creada
router.put('/updateCategory/:id', CategoryController.updateCategory);
router.delete('/delete/:id', CategoryController.delete )
router.get('/showCategories', CategoryController.getAll)
router.get('/showCategory/:id', CategoryController.getById)


module.exports = router;