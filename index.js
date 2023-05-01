const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 3000;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
