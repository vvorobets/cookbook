import * as SagaEffects from 'redux-saga/effects'
import app from 'routes/index'

function* showAllRecipes() {
    try {
        const allRecipes = yield call(app);
        yield put({
            type: 'FETCH_ALL_RECIPES_SUCCESS'
        })
    } catch(error) {
        yield put({
            type: 'FETCH_ALL_RECIPES_FAILED'
        })
    }
}