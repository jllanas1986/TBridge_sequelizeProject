const { Product,Category } = require("../models/index.js");
//const product = require('../models/product.js');
const ProductController = {

  create(req, res) {
    Product.create(req.body)
      .then((product) =>
        res.status(201).send({ message: "Producto creado con éxito", product })
      )
      .catch((error) => console.error(error));
  },

  update(req, res) {
    Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(
        (() => Product.findByPk(req.params.id).then((product) =>
          res.send({ msg: "Producto actualizado con exito", product })
        ))
      )
      .catch((error) => console.error(error));
    },

  delete(req, res) {
    Product.destroy({
    where: {
        id: req.params.id
    }
    })
    .then(
        (() => Product.findByPk(req.params.id).then((product) =>
          res.send({ msg: "Producto borrado con exito", product })
        )))
    .catch((error) => console.error(error));
    },

    getAll(req, res) {
          Product.findAll({
            include: [{ model: Category }],
          })
            .then((products) =>
              res.send({ msg: "Productos mostrados con su categoria", products })
            )
            .catch((error) => console.error(error));
        },

    getById(req, res) {
        Product.findByPk(req.params.id)
            .then(
                (() => Product.findByPk(req.params.id).then((product) =>
                  res.send({ msg: "Producto por su id mostrado con exito", product })
                )))
            .catch((error) => console.error(error));
    }
}
module.exports = ProductController;
