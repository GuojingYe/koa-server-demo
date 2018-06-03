const config_default = require('./config/config_default');
const config_prod = require('./config/config_prod');

global.config = process.env.NODE_ENV === 'production' ? config_prod : config_default;

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const parameter = require('koa-parameter');

const router = require('./app/router');
const errorHandler = require('./app/middleware/error_handler');
const sequelize = require('./app/util/database');

const app = new Koa();

console.log(global.config);

app.use(errorHandler);

app.use(bodyParser({
  onerror: function (err, ctx) {
    ctx.throw(422, 'body parse error');
  }
}));

parameter(app);

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
