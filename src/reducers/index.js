import { combineReducers } from 'redux';
import fetchRecipes from './fetchRecipes';
import manageRecipes from './manageRecipes';
import visibilityFilter from './visibilityFilter';
import setFetching from './setFetching';

export default combineReducers({
    fetchRecipes,
    manageRecipes,
    visibilityFilter,
    setFetching
})