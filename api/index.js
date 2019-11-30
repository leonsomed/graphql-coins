const jsonServer = require("json-server");

const router = jsonServer.router("./api/db.json");
const middlewares = jsonServer.defaults();
const server = jsonServer.create();

server.use(middlewares);
server.use((req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).json({ error: "not authorized" });
  }
});
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
