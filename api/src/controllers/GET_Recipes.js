const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getRecipe = async (req, res) => {
  try {
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?number=18&apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const { name } = req.query;
    const {results} = response.data;
    const apiRecipe = results.map(rec => { //Acá selecciono lo que quiero traerme de la API (Para no traerme toda la información)
      return {
        id: rec.id,
        title: rec.title,
        image: rec.image,
        summary: rec.summary,
        healthScore: rec.healthScore,
        steps: rec.analyzedInstructions[0] ? rec.analyzedInstructions[0].steps.map(s => s.step).join(' ') : '',
        diets: rec.diets
      }
    })
    const dbRecipe = await Recipe.findAll({ //Acá me traigo todas las recetas de la DB con las dietas con las que fueron posteadas
      include: {
        model: Diet,
      }
    }).then(data => data.map(rec => { //Y acá es cómo las muestro (QUÉ)
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
    const finalArray = apiRecipe.concat(dbRecipe); //Este arreglo me permite mostrar todas las recetas, tanto de la api como de la DB
    if (name) { //Si me llega algo por query, filtro...
      const filtered = finalArray.filter((e) =>
        e.title.toLowerCase().includes(name.toLowerCase())
      );
      res.status(200).json(filtered); //Y devuelvo lo filtrado
    } else {
      res.status(200).json(finalArray); //Si no, simplemente muestro TODAS las recetas
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecipe };
