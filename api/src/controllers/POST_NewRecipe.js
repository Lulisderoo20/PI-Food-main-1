const axios = require("axios");
const { Recipe, Diet } = require("../db");

const postNewRecipe = async (req, res) => {
  try {
    const { title, imagen, resumen, puntuacionSalud, pasoApaso } = req.body;
    const post = await Recipe.create({
      title,
      imagen,
      resumen,
      puntuacionSalud,
      pasoApaso,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postNewRecipe };
