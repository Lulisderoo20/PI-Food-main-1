const { Router } = require("express");
const { getRecipe } = require("../controllers/GET_Recipes");
const { getDetailRecipe } = require("../controllers/GET_DetailRecipes");
const { postNewRecipe } = require("../controllers/POST_NewRecipe");
const { dietController } = require("../controllers/GET_Diets");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipe", getRecipe);
router.get("/diets", dietController);
router.get("/recipe/:idRecipe", getDetailRecipe);
router.post("/recipe", postNewRecipe);

module.exports = router;
