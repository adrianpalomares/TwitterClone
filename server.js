const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// app.use(favicon(__dirname + "/client/build/favicon.ico"));

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, '/client/build')));

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
})

app.listen(PORT, function() {
	console.log(`SERVING ON PORT: ${PORT}`);
})