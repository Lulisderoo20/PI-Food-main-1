const {Recipe} = require('../db')
require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');


const getDetailRecipe = async(req, res) => {
    try {
        const {idRecipe} = req.params;
        const regEx = /^[0-9]+$/
        let data;
        if(regEx.test(idRecipe)){
            const response = await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)
            data = response.data;
        }else{
            data = await Recipe.findByPk(idRecipe)   
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json('ID no existente')
    }
};

module.exports = { getDetailRecipe };
