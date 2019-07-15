/*
 *
 * 该文件的目的是为了在执行npm run build 之后自动生成README.md 和package.json
 * 
 * 
 */

const fs = require("fs");
const path = require("path");

const package =  fs.readFileSync('./version.json');
const readme = fs.readFileSync('./README.md');

var packagePath = path.join(__dirname, './dist/package.json'); 
var readmePath = path.join(__dirname, './dist/README.md'); 

fs.writeFile(packagePath, package, function(err) {
  if (err) {
      return console.log(err);
  }
});

fs.writeFile(readmePath, readme, function(err) {
  if (err) {
      return console.log(err);
  }
});
