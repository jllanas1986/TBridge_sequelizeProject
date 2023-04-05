'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category)
      Product.belongsToMany(models.Order, {
        through:models.Orders_product
      })
    }
  }
  Product.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor, introduce el nombre del producto",
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Por favor, introduce el precio del producto",
          },
        }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor, introduce categoryId ",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};