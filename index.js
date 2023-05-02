const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 3000;

const chefs = require("./data/chefs.json");
const team = require("./data/team.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/team", (req, res) => {
  res.send(team);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
