const fetchRecipes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_RECIPES_SUCCESS':
            return action.allRecipes;
        default:
            return state;
    }
}

export default fetchRecipes