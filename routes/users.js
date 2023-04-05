const express = require('express');///importar express
const UserController = require('../controllers/UserController');//autoimportación
const { authentication } = require('../middlewares/authentications');
const router = express.Router();///Creamos el router

router.post('/createUser', UserController.create);///ruta creada
router.post('/login', UserController.login)
router.get('/showInfoUser',authentication, UserController.getInfoUser)
router.delete('/logout', authentication, UserController.logout)

module.exports = router;