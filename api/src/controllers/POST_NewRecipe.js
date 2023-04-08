const { Recipe, Diet } = require("../db");

const postNewRecipe = async (req, res) => {
  try {
    const { title, image, summary, healthScore, steps, diets } = req.body;
    console.log(req.body);
    const post = await Recipe.create({
      title,
      image,
      summary,
      healthScore,
      steps, //Como las dietas que guardo en DB son objetos y yo quiero mostrar un array de strings, mapeo el arreglo de dietas para quedarme solo con el name
    });
    const idDiets = await Diet.findAll({
      where: {name: diets}
    })
    await post.addDiet(idDiets)
    res.status(201).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postNewRecipe };
