import { Hono } from 'hono'

const app = new Hono()

/* app.get('/', async (c) => {
  const body = await c.req.json();
  console.log(c);
  
  console.log(body);
  console.log(c.req.header("token"));
  console.log(c.req.query("param"));
  
return c.text('Learning hono !!!');
}) */

/* Middlewares */
app.use(async (c, next) => {
  if (c.req.header("token")) {
    await next();
  } else {
    return c.text('you do not have access')
  }
})

app.get('/', async (c) => {
  const body = await c.req.parseBody();
  console.log(c.req.raw.cf?.region);
  console.log('body', body);
  console.log('token', c.req.header("token"));
  console.log('param', c.req.query("param"));

  return c.json({ msg: "Done with hono !!!" })
})














export default app;
