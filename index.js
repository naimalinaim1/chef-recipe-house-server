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

app.get("/chef/:id", (req, res) => {
  const id = Number(req.params.id);
  const findChef = chefs.find((chef) => chef.id === id);
  res.send(findChef);
});

app.get("/recipe/:id", (req, res) => {
  const [userId, recipeId] = req.params.id.split("_");
  const findChef = chefs.find((chef) => chef.id === Number(userId));
  const findRecipe = findChef.recipes.find(
    (recipe) => recipe.id === Number(recipeId)
  );
  res.send(findRecipe);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
