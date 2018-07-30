import * as SagaEffects from 'redux-saga/effects'
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
    try {
        const addedRecipe = yield SagaEffects.call(() => {
            return axios.post('http://localhost:9000/api/recipes/add', action.payload)
            .then(res => console.log(res.data)).catch(err => console.log(err));
        });
        yield SagaEffects.call(showAllRecipes);
    } catch(error) {
        yield SagaEffects.put({
            type: 'ADD_RECIPE_FAILURE'
        })
    }
}

function* deleteRecipeAndUpdate(action) {
        try {
            const deletedRecipe = yield SagaEffects.call(() => {
                return axios.get('http://localhost:9000/api/recipes/delete/'+ action.payload).then(console.log('Deleted'))
                .catch(err => console.log(err));
            });
            yield SagaEffects.call(showAllRecipes);
        } catch(error) {
            yield SagaEffects.put({
                type: 'DELETE_RECIPE_FAILURE'
            })
        }
}
   
export function* recipeSaga() {
    yield SagaEffects.all([
        SagaEffects.takeLatest('FETCH_ALL_RECIPES', showAllRecipes),
        SagaEffects.takeLatest('ADD_RECIPE', addRecipeAndUpdate),
        SagaEffects.takeLatest('DELETE_RECIPE', deleteRecipeAndUpdate)
    ])
  }