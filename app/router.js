const Router = require('koa-router');
const controller = require('./controller');

const router = new Router();

router.get('/home/topic', controller.topic.getTopicDetail);
router.post('/home/topic', controller.topic.updateTopic);

module.exports = router;
