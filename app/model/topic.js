const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Topic = sequelize.define('topic', {
  topicId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
  id: false,
});

module.exports = Topic;
