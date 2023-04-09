const {Diet} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;

const getDiet = async() => {
    try {
        const dietas = [];
        const response = await axios(
            `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
          );
        const diets = response.data.results.map(recipe => recipe.diets);
        for(let i = 0; i < diets.length; i++){
            for(let j = 0; j < diets[i].length; j++){
                if(!dietas.includes(diets[i][j])){
                    dietas.push(diets[i][j])
                }
            }
        }
        await Diet.bulkCreate(dietas.map(diet => {
            return {
                name:diet
            }
        }), {ignoreDuplicates: true});
        console.log('Base de datos cargada!! 😎');
    } catch (error) {
       return (error.message)
    }
};

const dietController = async(req, res) => {
    try {
        const dbRes = await getDiet()
        res.status(200).json({msg: 'Dietas cargadas'})       
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}
const getDietsDB = async (req, res) => {
    try {
        const dbRes = await Diet.findAll()
        res.status(200).json(dbRes)       
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}
module.exports = { getDiet, dietController, getDietsDB };
