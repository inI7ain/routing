const express = require("express");
const path = require("path");

const router = require("./router/router");

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(router);

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.listen(port, () => {
	console.log(`Server is up and running on port: ${port}`);
});