const { Router } = require("express");
const { getRecipe } = require("../controllers/GET_Recipes");
const { getDetailRecipe } = require("../controllers/GET_DetailRecipes");
const { postNewRecipe } = require("../controllers/POST_NewRecipe");
const { dietController, getDietsDB } = require("../controllers/GET_Diets");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.get("/getDiets", dietController)
router.get("/recipe", getRecipe);
router.get("/diets", getDietsDB);
router.get("/recipe/:idRecipe", getDetailRecipe);
router.post("/recipe", postNewRecipe);

module.exports = router;
