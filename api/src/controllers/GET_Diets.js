const {Diet} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;


const getDiet = async(req, res) => {
    try {
        const dietas = [];
        const response = await axios(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
          );
        const diets = response.data.results.map(recipe => recipe.diets);
        for(let i = 0; i < diets.length; i++){
            for(let j = 0; j < diets[i].length; j++){
                if(!dietas.includes(diets[i][j])){
                    dietas.push(diets[i][j])
                }
            }
        }
        const aux = await Diet.bulkCreate(dietas.map(diet => {
            return {
                name:diet
            }
        }), {ignoreDuplicates: true})
        const allDiets = await Diet.findAll()
        //console.log(dietas)
        res.status(200).json(allDiets)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = { getDiet };
