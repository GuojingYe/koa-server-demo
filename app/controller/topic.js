const service = require('../service');

module.exports = {
  getTopicDetail: getTopicDetail,
  updateTopic: updateTopic,
};

// 获取专题信息
async function getTopicDetail(ctx) {
  const topicId = ctx.query.topicId;
  ctx.body = await service.topic.getTopicDetail(topicId);
}

// 更新专题
async function updateTopic(ctx) {
  console.log(ctx.request);
  const topic = ctx.request.body;
  console.log(topic);
  ctx.body = topic;
}
