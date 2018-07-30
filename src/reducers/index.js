import { combineReducers } from 'redux';
import fetchRecipes from './fetchRecipes';
import manageRecipes from './manageRecipes';
import visibilityFilter from './visibilityFilter';
import isFetching from './isFetching';

export default combineReducers({
    fetchRecipes,
    manageRecipes,
    visibilityFilter,
    isFetching
})

// const languages = (state = [], action) => {
//     // reducer logic here
//     };
// const translations = (state = {}, action) => {
//     // we now have access to language codes from action
//     const codes = action.languageCodes;
//     // reducer logic here
// }
//     // custom combine reducers
//     const rootReducer = (state = {}, action) => {
//     const languageCodes = state.languages.map(language => language.code);
//     return {
//     languages: languages(state.languages, action),
//     // merge languageCodes with original action object, now you have access in translations reducer
//     translations: translations(state.translations, {...action, languageCodes})
//     };
// };