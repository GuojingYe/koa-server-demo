const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const router = require('./app/router');
const errorHandler = require('./app/middleware/error_handler');
const sequelize = require('./app/util/database');

const app = new Koa();

app.use(errorHandler);

app.use(bodyParser({
  onerror: function (err, ctx) {
    ctx.throw(422, 'body parse error');
  }
}));

app.use(router.routes()).use(router.allowedMethods());

// 检测数据库连接是否生效
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(3000);
console.log('koa start');
