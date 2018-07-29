import * as SagaEffects from 'redux-saga/effects'
// import app from './routes'
import axios from "axios";

import {fetchAllRecipes} from "./actions";
import {addRecipe} from "./actions";

export function* watchFetchingRequests() {
    yield SagaEffects.takeEvery('FETCH_ALL_RECIPES', showAllRecipes);
  }

function* showAllRecipes() {
    try {
console.log("Hello from saga!");
        const res = yield SagaEffects.call(() => {
            return axios({
                method: "get",
                url: "http://localhost:9000/api/recipes"
            });
        });
        const allRecipes = res.data;
console.log('Fetched in saga: ', allRecipes);
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
        watchFetchingRequests(),
    ])
  }