const { Order,Product } = require("../models/index.js");
//const product = require("../models/product.js");


const OrderController = {
    create(req, res, next) {
        Order.create({...req.body,UserId:req.user.id})
          .then((order) => {
            order.addProduct(req.body.ProductId);
            res.status(201).send({ message: "Pedido realizado con éxito", order })})
          .catch((error) => {
            console.error(error);
            next(error);
          });
    },

    getAll(req, res) {
        Order.findAll({
          include: [{ model: Product }],
        })
          .then((order) =>
            res.send({ msg: "Pedido mostrado con sus productos", order }))
          .catch((error) => console.error(error));
      },
}

module.exports = OrderController;