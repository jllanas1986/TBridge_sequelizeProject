const { Router } = require('express');
const express = require('express');///importar express
const ProductController = require('../controllers/ProductController');//autoimportación
const router = express.Router();///Creamos el router

router.post('/createProduct', ProductController.create);///ruta creada
router.put('/updateProduct/:id', ProductController.update);
router.delete('/deleteproduct/:id', ProductController.delete);
router.get('/showProducts', ProductController.getAll);
router.get('/showProduct/:id', ProductController.getById);
router.get('/showByName/:name', ProductController.getOneByName);
router.get('/showByPrice/:price', ProductController.getOneByPrice);
router.get('/showOrderPrice', ProductController.getOrderPrice);

module.exports = router;