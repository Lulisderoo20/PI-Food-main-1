import {
  ADD_RECIPE,
  GET_ALL_RECIPES,
  GET_QUERY_RECIPE,
  GET_DIETS,
  FILTER_BY_DIETS,
  FILTER_BY_ORIGIN,
  HEALTH_SCORE_ORDER,
  ALPHABETIC_ORDER,
  SET_LOADING,
  GET_DETAIL_RECIPE,
} from "./actions-types";

const initialState = {
  myRecipes: [],
  allRecipes: [],
  //filteredRecipes: [],
  loading: false,
  detail: {},
  diets: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ADD_RECIPE:
      return {
        ...state,
        myRecipes: [...state.myRecipes, payload],
        allRecipes: [...state.allRecipes, payload]
      };
    case GET_ALL_RECIPES:
      return {
        ...state,
        myRecipes: payload,
        allRecipes: payload
      };
    case GET_QUERY_RECIPE:
      return {
        ...state,
        myRecipes: payload,
      }  
    case GET_DIETS:
      return {
        ...state,
        diets: payload
      }
    case GET_DETAIL_RECIPE:
      return {
        ...state,
        detail: payload,
      };
    case FILTER_BY_DIETS:
      const allRecipesFiltered = state.allRecipes.filter(
        (recipe) => recipe.diets.includes(payload)
      );
      return {
        ...state,
        myRecipes: allRecipesFiltered,
      };
    case ALPHABETIC_ORDER:
      return {
        ...state,
        myRecipes:
          payload === "A-Z"
            ? state.myRecipes.sort((a, b) => a.title.localeCompare(b.title))
            : state.myRecipes.sort((a, b) => b.title.localeCompare(a.title)),
      };
    case HEALTH_SCORE_ORDER:
      return {
        ...state,
        myRecipes:
          payload === "Ascendente"
            ? state.myRecipes.sort((a, b) => (a.healthScore < b.healthScore ? -1 : 1))
            : state.myRecipes.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1)),
      };
    case FILTER_BY_ORIGIN:
      const filtered = state.allRecipes.filter((recipe) => {
        const regExp = /^[0-9]+$/;
        if(payload === 'Api' && regExp.test(recipe.id)){
          return true;
        }else if(payload === 'DataBase' && !regExp.test(recipe.id)){
          return true;
        }else{
          return false;
        }
      })
      return {
        ...state,
        myRecipes: filtered
      }
    case "DELETE_FILTERS":
      return{
        ...state,
        myRecipes: state.allRecipes
      }
    default:
      return { ...state };
  }
};

export default reducer;
