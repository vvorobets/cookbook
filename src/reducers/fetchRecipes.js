const fetchRecipes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_RECIPES_SUCCESS':
console.log('fetch_recipes_success! Note: concat arrays!')
            return action.allRecipes;
        default:
            return state;
    }
}

export default fetchRecipes