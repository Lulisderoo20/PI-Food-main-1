const { Recipe } = require("../db");

const postNewRecipe = async (req, res) => {
  try {
    const { title, imagen, resumen, puntuacionSalud, pasoApaso, diets } = req.body;
    const post = await Recipe.create({
      title,
      imagen,
      resumen,
      puntuacionSalud,
      pasoApaso,
    });
    await post.addDiets(diets)
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postNewRecipe };
