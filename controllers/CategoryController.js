const { Category } = require('../models/index.js');
const CategoryController = {
    create(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Categoria creada con éxito', category }))
            .catch((error) => console.error(error));

    },

}

module.exports = CategoryController;