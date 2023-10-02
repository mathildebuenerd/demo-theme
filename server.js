const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const colors = JSON.parse(fs.readFileSync("./settings/colors.json"));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/"));

// serve up static CSS files in public/assets/ folder when /public link is called in ejs files
app.use("/public", express.static("public"));

// index page
app.get("/theme", function (req, res) {
  res.render("templates/index", { colors });
});

// // about page
// app.get("/about", function (req, res) {
//   res.render("pages/about");
// });

app.listen(8080);
console.log("Server is listening on port 8080");
