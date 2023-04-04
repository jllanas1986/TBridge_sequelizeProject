////importar el model/index a User////
const { User, Token } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
  create(req, res, next) {
    req.body.role = "user";
    const password = bcrypt.hashSync(req.body.password, 10); ///encriptando clave de acceso
    User.create({ ...req.body, password: password })
      .then((user) =>
        res.status(201).send({ message: "Usuario creado con éxito", user })
      )
      .catch((error) => {
        console.error(error);
        next(error);
      });
  },

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }

      const isMatch = bcrypt.compareSync(req.body.password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }

    const token = jwt.sign({ id: user.id }, jwt_secret);
    Token.create({ token, UserId: user.id });
    res.send({ token, message: 'Bienvenid@ ' + user.name, user });
    });
  },
};

module.exports = UserController;
