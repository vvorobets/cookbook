import { combineReducers } from 'redux';
import manageRecipes from './manageRecipes';
import visibilityFilter from './visibilityFilter';
import setFetching from './setFetching';

export default combineReducers({
    manageRecipes,
    visibilityFilter,
    setFetching
})