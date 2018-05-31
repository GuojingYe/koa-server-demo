const Sequelize = require('sequelize');
const sequelize  = new Sequelize('koa_demo', 'root', '123456', {
  host: 'localhost',
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
