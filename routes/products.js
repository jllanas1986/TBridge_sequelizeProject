const express = require('express');///importar express
const ProductController = require('../controllers/ProductController');//autoimportación
const { authentication, isAdmin } = require('../middlewares/authentications');
const router = express.Router();///Creamos el router

router.post('/createProduct',authentication, isAdmin, ProductController.create);
router.put('/updateProduct/:id',authentication, isAdmin, ProductController.update);
router.delete('/deleteproduct/:id',authentication, isAdmin, ProductController.delete);
router.get('/showProducts', ProductController.getAll);
router.get('/showProduct/:id', ProductController.getById);
router.get('/showByName/:name', ProductController.getOneByName);
router.get('/showByPrice/:price', ProductController.getOneByPrice);
router.get('/showOrderPrice', ProductController.getOrderPrice);

module.exports = router;