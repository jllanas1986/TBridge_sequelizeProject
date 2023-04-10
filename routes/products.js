const express = require('express');///importar express
const ProductController = require('../controllers/ProductController');//autoimportación
const { authentication } = require('../middlewares/authentications');
const router = express.Router();///Creamos el router

router.post('/createProduct',authentication, ProductController.create);
router.put('/updateProduct/:id',authentication, ProductController.update);
router.delete('/deleteproduct/:id',authentication, ProductController.delete);
router.get('/showProducts', ProductController.getAll);
router.get('/showProduct/:id', ProductController.getById);
router.get('/showByName/:name', ProductController.getOneByName);
router.get('/showByPrice/:price', ProductController.getOneByPrice);
router.get('/showOrderPrice', ProductController.getOrderPrice);

module.exports = router;