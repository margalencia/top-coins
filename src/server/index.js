const path = require("path");
const Koa = require("koa");
const Router = require("koa-router");
const axios = require("axios");

require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const app = new Koa();
const router = new Router();
const APP_PORT = process.env.APP_PORT || 4000;

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

router.get("/api/coins", async ctx => {
  const result = await axios.get(
    "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      params: {
        start: 1,
        limit: ctx.query.limit
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY
      }
    }
  );

  ctx.body = result.data;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(APP_PORT, () =>
  console.log(`App listening: http://localhost:${APP_PORT}`)
);
