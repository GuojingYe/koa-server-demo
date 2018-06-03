const Sequelize = require('sequelize');

const mysql = global.config.mysql;

const sequelize  = new Sequelize(mysql.name, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // 仅限 SQLite
  storage: 'path/to/database.sqlite'
});

module.exports = sequelize;
