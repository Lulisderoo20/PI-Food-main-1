const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getRecipe = async (req, res) => {
  try {
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const { name } = req.query;
    const {results} = response.data;
    const apiRecipe = results.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        summary: rec.summary,
        healthScore: rec.healthScore,
        steps: rec.analyzedInstructions,
        diets: rec.diets
      }
    })
    const dbRecipe = await Recipe.findAll({
      include: {
        model: Diet,
      }
    }).then(data => data.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        summary: rec.summary,
        healthScore: rec.healthScore,
        steps: rec.steps,
        diets: rec.diets.map(diet => diet.name)
      }
    }))
    const finalArray = apiRecipe.concat(dbRecipe);
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
