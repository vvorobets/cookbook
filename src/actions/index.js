import axios from "axios";

export const FETCH_ALL_RECIPES = "FETCH_ALL_RECIPES";
export const FETCH_ALL_RECIPES_SUCCESS = "FETCH_ALL_RECIPES_SUCCESS";
export const FETCH_ALL_RECIPES_FAILURE = "FETCH_ALL_RECIPES_FAILURE";
export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";
export const VIEW_RECIPE = "VIEW_RECIPE";
export const VIEW_RECIPE_SUCCESS = "VIEW_RECIPE_SUCCESS";
export const VIEW_RECIPE_FAILURE = "VIEW_RECIPE_FAILURE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";
export const SET_RATE = "SET_RATE";
export const SET_RATE_SUCCESS = "SET_RATE_SUCCESS";
export const SET_RATE_FAILURE = "SET_RATE_FAILURE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";
export const SET_FILTER = "SET_FILTER";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_BY_RATE = "SHOW_BY_RATE";
export const SHOW_FOUND = "SHOW_FOUND";

export const fetchAllRecipes = () => {
console.log('Fetching recipes from actions');
    return axios({
        method: "get",
        url: "http://localhost:9000/api/recipes"
    });
}
      
let currentRecipeId = 0;

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
});

export const visibilityFilters = {SHOW_ALL: 'SHOW_ALL', SHOW_BY_RATE: 'SHOW_BY_RATE', SHOW_FOUND: 'SHOW_FOUND'};

export const addRecipe = recipe => ({
    type: 'ADD_RECIPE',
    payload: {
        id: currentRecipeId++,
        title: recipe.title,
        description: recipe.description,
        rating: recipe.rating
    }
});

export const viewRecipe = id => ({
    type: 'VIEW_RECIPE',
    id
});

export const editRecipe = (recipe, id) => ({
    type: 'EDIT_RECIPE',
    id
});

export const deleteRecipe = id => ({
    type: 'DELETE_RECIPE',
    payload: id
});

export const setRate = (rate, id) => ({
    type: 'SET_RATE',
    rate
});