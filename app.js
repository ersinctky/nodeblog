const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nodeblog_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(express.static("public"));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("site/index");
});

app.get("/about", (req, res) => {
  res.render("site/about");
});

app.get("/blog", (req, res) => {
  res.render("site/blog");
});

app.get("/contact", (req, res) => {
  res.render("site/contact");
});

app.get("/login", (req, res) => {
  res.render("site/login");
});

app.get("/register", (req, res) => {
  res.render("site/register");
});
app.listen(port, () => {
  console.log(`server port ${port} da çalışıryor`);
});
