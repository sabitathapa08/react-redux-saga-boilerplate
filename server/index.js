var express = require("express");
var http = require("http");

const port = process.env.PORT || 8080;
const index = require("./routes/index");
const app = express();
app.use(index);

//create a server object:
const server = http.createServer(app);

server.listen(port); //the server object listens on port 8080
