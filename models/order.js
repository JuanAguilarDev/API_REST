const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Product = require('./product');

const Order = sequelize.define('orders', {
    productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE' // Allows delete on cascade
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE' // Allows delete on cascade
      },
      productsAmount: {type: Sequelize.INTEGER},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
},
{
    hooks: {
      beforeCreate: function (review, options) {
        review.createdAt = new Date();
        review.updatedAt = new Date();
      },
      beforeUpdate: function (review, options) {
        review.updatedAt = new Date();
      },
    },
});

Order.belongsTo(User);
Order.belongsTo(Product);

module.exports = Order;