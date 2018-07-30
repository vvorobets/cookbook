import * as SagaEffects from 'redux-saga/effects'
// import app from './routes'
import axios from "axios";

import {addRecipe} from "./actions";

function* showAllRecipes() {
    try {
        const res = yield SagaEffects.call(() => {
            return axios({
                method: "get",
                url: "http://localhost:9000/api/recipes"
            });
        });
        const allRecipes = res.data;
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_SUCCESS', allRecipes
        })
    } catch(error) {
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_FAILURE'
        })
    }
}
function* addRecipeAndUpdate(action) {
console.log("Hello from update-saga!");
    try {
        const addedRecipe = yield SagaEffects.call(addRecipe, action.recipe);
console.log('To add: ', addedRecipe);
        yield SagaEffects.put({
            type: 'ADD_RECIPE_SUCCESS', addedRecipe
        })
    } catch(error) {
        yield SagaEffects.put({
            type: 'ADD_RECIPE_FAILURE'
        })
    }
}

export function* recipeSaga() {
    yield SagaEffects.all([
        SagaEffects.takeLatest('FETCH_ALL_RECIPES', showAllRecipes),
        SagaEffects.takeLatest('ADD_RECIPE', addRecipeAndUpdate)
    ])
  }