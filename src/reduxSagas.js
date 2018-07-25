import * as SagaEffects from 'redux-saga/effects'
// import app from './routes'
import axios from "axios";

function fetchAllRecipes() {
    return axios({
      method: "get",
      url: "http://localhost:3000/recipes"
    });
  }

function* showAllRecipes() {
    try {
        const allRecipes = yield SagaEffects.call(fetchAllRecipes);
        yield SagaEffects.put({
            type: 'FETCH_ALL_RECIPES_SUCCESS'
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