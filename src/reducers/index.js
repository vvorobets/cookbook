import { combineReducers } from 'redux';
import manageRecipes from 'manageRecipes';
import visibilityFilter from 'visibilityFilter';

export default combineReducers({
    manageRecipes,
    visibilityFilter
})