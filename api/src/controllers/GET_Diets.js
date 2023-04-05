const {Diet} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;


const getDiet = async() => {
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
        await Diet.bulkCreate(dietas.map(diet => {
            return {
                name:diet
            }
        }), {ignoreDuplicates: true})
        await Diet.findAll()
    } catch (error) {
       return (error.message)
    }
};

module.exports = { getDiet };
