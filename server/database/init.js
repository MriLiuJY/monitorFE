/**
 * @file user account connect DB init js
 * @author  JYkid
 * @version 0.0.1
 */

const mongoose = require("mongoose");
const db = "mongodb://localhost/test";

mongoose.Promise = global.Promise;

exports.connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  mongoose.connect(db);

  mongoose.connection.on("disonnected", () => {
    mongoose.connect(db);
  });

  mongoose.connection.on("err", err => {
    mongoose.connect(db);
  });

  mongoose.connection.on("open", () => {
    console.log("Mongoodb connect done!");
  });
};
