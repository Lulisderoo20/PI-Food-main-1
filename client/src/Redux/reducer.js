import {
  ADD_RECIPE,
  GET_ALL_RECIPES,
  GET_DETAIL_RECIPE,
  FILTER,
  ORDER,
} from "./actions-types";

const initialState = {
  myRecipes: [],
  detailRecipe: {}
};
const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_RECIPE:
//       return {
//         ...state,
//         myRecipes: [...state.myRecipes, payload],
//       };
//     case GET_ALL_RECIPES:
//       return {
//         ...state,
//         myRecipes: payload,
//       };
//     case GET_DETAIL_RECIPE:
//         return {
//             ...state,
//             detailRecipe: payload
//         };
//     case FILTER:
//         const allRecipesFiltered = state.myRecipes.filter(recipe => recipe.diets === payload)
//         return {
//             ...state,
//             myRecipes: allRecipesFiltered
//         };
//     case ORDER:
//         return {
//             ...state,
//             myRecipes:
//             payload === 'Ascendente'
//             ? state.myRecipes.sort((a, b) => a - b)
//             : state.myRecipes.sort((a, b) => b - a)
//         }
//     default:
//         return {...state}

//   }
};

export default reducer;
