const {Diet} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;

const getDiet = async() => {
    try {
        const dietas = []; //arreglo vacio de dietas
        const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`); //get de diets PERFECTO
        
        const diets = response.data.results.map(recipe => recipe.diets); //array de dietas,se pueden repetir?,pero esto quedaria asi 
        //      [ [gluten free], [gluten free, vegano] ]    (ejemplo)
        
        for(let i = 0; i < diets.length; i++){     // ah aca esta
            for(let j = 0; j < diets[i].length; j++){
                if(!dietas.includes(diets[i][j])){
                    dietas.push(diets[i][j])  // perfectttttttt
                }
            }
        }
        
        
        await Diet.bulkCreate(dietas.map(diet => {
            return {
                name:diet
            }
        }),  {ignoreDuplicates: true}); // importante para q no se duplique la database
        
        
        console.log('Base de datos cargada!! 😎');
        
        
    } catch (error) {
       return (error.message)
    }
};

 //con getDiet se carga la base de datos, se ejecuta en la funcion justo esta de abajo jaja


const dietController = async(req, res) => {
    try {
        const dbRes = await getDiet() //se carga la database
        res.status(200).json({msg: 'Dietas cargadas'})       
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}


const getDietsDB = async (req, res) => { // esta la deben importar en otro controller o algo asi   //pero donde se ejecuta?
    try { 
        const dbRes = await Diet.findAll()
        res.status(200).json(dbRes)       
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}
module.exports = { getDiet, dietController, getDietsDB };
