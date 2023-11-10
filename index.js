//import json-server library in index.js
const jsonServer = require("json-server");

//create a path to db.json
const router = jsonServer.router("db.json");

//middleware to convert is to json
const middleware = jsonServer.defaults();

//create server using json-server library
const mediaPlayerServer = jsonServer.create();

//connect
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

//setup port for server
const port = 4000 || process.env.PORT;

//monitor 4000
mediaPlayerServer.listen(port, () => {
  console.log(
    `mediaPlayerServer is listening at ${"\033[92m"}http://localhost:${port} ${"\033[39m"}\n`
  );
});
