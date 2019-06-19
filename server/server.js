const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("./"));
app.use(express.static("dist"));

app.use("/index", (req, res) => {
  const filename = "./dist/index.html";
  fs.readFile(filename, (err, result) => {
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});


const point = 8081;
console.log("Your server listen at " + "http://localhost:" +point + "/index");
app.listen(point);

