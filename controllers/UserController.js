////importar el model/index a User////
const { User } = require('../models/index.js');
const UserController = {
    create(req, res, next) {
        req.body.role = "user";
        User.create(req.body)
            .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
            .catch((error) => {
                console.error(error);
                next(error)
              });

    },
}

module.exports = UserController;