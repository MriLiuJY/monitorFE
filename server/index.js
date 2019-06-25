const fs = require("fs");
const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const config = require("../config/webpack.dev.config");
const bodyParser = require("body-parser");
const session = require('express-session');

const app = express();
app.use(express.static("./"));
const complier = webpack(config);

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});


// webpack middleware
app.use(devMiddleware(complier, {
  publicPath: config.output.publicPath,
  quiet: true,
}));

app.use(hotMiddleware(complier));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("gt-dist"));
app.use(express.static("build"));

app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// page URL
app.use("/index", (req, res) => {
  const filename = "./index.html";
  fs.readFile(filename, (err, result) => {
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});

// create 500 in server
app.use("/servererr", (req, res) => {
  reqq;
  res.send({
    status: "success",
  });
});

// timeout no res
app.use("/timeout", (req, res) => {});

const point = 9998;
console.log("Your server listen at " + "http://localhost:" +point + "/index");
app.listen(point);

