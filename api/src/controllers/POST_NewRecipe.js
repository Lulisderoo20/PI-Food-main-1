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
      diets: diets.map(diet => diet.name)
    });
    await post.addDiets(diets)
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postNewRecipe };
