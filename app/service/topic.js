const model = require('../model');

exports.getTopicDetail = getTopicDetail;

async function getTopicDetail() {
  return await model.topic.findAll();
}
