const { Category } = require('../models/index.js');
const CategoryController = {
    create(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Categoria creada con éxito', category }))
            .catch((error) => console.error(error));

    },

    updateCategory(req, res) {
        Category.update(
          { ...req.body },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then(() =>
            Category.findByPk(req.params.id).then((category) =>
              res.send({ msg: "Categoria actualizada con exito", category })
            )
          )
          .catch((error) => console.error(error));
      },
    
      delete(req, res) {
        Category.destroy({
          where: {
            id: req.params.id,
          },
        })
          .then(() =>
            Category.findByPk(req.params.id).then((category) =>
              res.send({ msg: "Categoria borrada con exito", category })
            )
          )
          .catch((error) => console.error(error));
      },
    
      getAll(req, res) {
        Category.findAll()
          .then((category) =>
            res.send({ msg: "Categorias mostradas con exito", category })
          )
          .catch((error) => console.error(error));
      },
}

module.exports = CategoryController;