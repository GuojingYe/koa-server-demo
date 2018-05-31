module.exports = errorHandler;

async function errorHandler(ctx, next) {
  try {
    await next();
  }
  catch (err) {
    ctx.status = err.status;
    ctx.body = { resultStatus: false, errMessage: err.message };
  }
}
