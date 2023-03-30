const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
const db = require("../db.js");
require("dotenv").config();
const { API_KEY } = process.env;

const getRecipe = async (req, res) => {
  try {
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const { name } = req.query;
    const data = response.data.results;
    const dbRecipe = await Recipe.findAll({
      include: {
        model: Diet,
      }
    });
    console.log(dbRecipe);
    const finalArray = data.concat(dbRecipe);
    if (name) {
      const filtered = finalArray.filter((e) =>
        e.title.toLowerCase().includes(name.toLowerCase())
      );
      res.status(200).json(filtered);
    } else {
      res.status(200).json(finalArray);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecipe };
