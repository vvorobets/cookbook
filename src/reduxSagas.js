import * as SagaEffects from 'redux-saga/effects'
// import app from './routes'
import axios from "axios";

function fetchAllRecipes() {
console.log('Fetching recipes...');
    return axios({
      method: "get",
      url: "http://localhost:9000/api/recipes"
    });
  }

function* showAllRecipes() {
    try {
        const allRecipes = yield SagaEffects.call(fetchAllRecipes);
console.log('Fetched: ', allRecipes);
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_SUCCESS', allRecipes
        })
    } catch(error) {
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_FAILED'
        })
    }
}

export function* recipeSaga() {
    yield SagaEffects.all([
        showAllRecipes
    ])
  }