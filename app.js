const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`server port ${port} da çalışıryor`);
});
