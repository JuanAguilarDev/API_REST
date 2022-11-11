const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "sesion6",
    "root",
    "Juan1290",
    {
        host: "127.0.0.1",
        dialect: 'mysql',
        logging: false
    }
)

module.exports = sequelize;