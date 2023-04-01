import {
  ADD_RECIPE,
  FILTER,
  ORDER,
  GET_ALL_RECIPES,
  GET_DETAIL_RECIPE,
} from "./actions-types";
import axios from "axios";

export const addRecipe = (recipe) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/recipe", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });
      dispatch({type: ADD_RECIPE, payload: recipe});
    } catch (error) {
        alert('No se pudo crear receta')
    }
  };
};
export const getAllRecipes = () => {
    return async function (dispatch){
        try {
            const response = await axios.get("http://localhost:3001/recipe");
            dispatch({type: GET_ALL_RECIPES, payload: response.data})
        } catch (error) {
            alert('No se encontraron recetas')
        }
    }
};
export const getDetailRecipe = (idRecipe) => {
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/recipe/${idRecipe}`);
            dispatch({type: GET_DETAIL_RECIPE, payload: response.data})
        } catch (error) {
            alert('No hemos encontrado la receta con el ID solicitado')
        }
    }
};
export const filterRecipe = (dieta) => {
    return {
        type: FILTER,
        payload: dieta
    }
};
export const orderRecipe = (option) =>{
    return {
        type: ORDER,
        payload: option
    }
}