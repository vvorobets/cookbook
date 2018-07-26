import * as SagaEffects from 'redux-saga/effects'
// import app from './routes'
import axios from "axios";

import {fetchAllRecipes} from "./actions";
import {addRecipe} from "./actions";

function* showAllRecipes() {
    try {
        console.log("Hello from saga!");
        const allRecipes = yield SagaEffects.call(fetchAllRecipes);
console.log('Fetched: ', allRecipes);
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_SUCCESS', allRecipes
        })
    } catch(error) {
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_FAILURE'
        })
    }
}
function* addRecipeAndUpdate() {
    try {
        const addedRecipe = yield SagaEffects.call(addRecipe);
console.log('Added: ', addedRecipe);
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
        showAllRecipes,
        SagaEffects.takeLatest('FETCH_ALL_RECIPES', SagaEffects.call(fetchAllRecipes))
    ])
  }