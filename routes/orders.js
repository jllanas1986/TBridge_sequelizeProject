const express = require('express');///importar express
const OrderController = require('../controllers/OrderController');//autoimportación
const router = express.Router();///Creamos el router
const { authentication } = require('../middlewares/authentications');


router.post('/create', authentication, OrderController.create)
router.get('/showOrdersProducts', OrderController.getAll)

module.exports = router;