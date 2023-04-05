const { Recipe } = require("../db");

const postNewRecipe = async (req, res) => {
  try {
    const { title, image, summary, healthScore, steps, diets } = req.body;
    const post = await Recipe.create({
      title,
      image,
      summary,
      healthScore,
      steps,
      diets: diets.map(diet => diet.name) //Como las dietas que guardo en DB son objetos y yo quiero mostrar un array de strings, mapeo el arreglo de dietas para quedarme solo con el name
    });
    await post.addDiets(diets)
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postNewRecipe };
