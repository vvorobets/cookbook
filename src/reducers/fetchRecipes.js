const fetchRecipes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_RECIPES_SUCCESS':
console.log('fetched recipes added to state! Note: concat arrays!')
            return [...state, action.allRecipes]
        default:
            return state
    }
}

export default fetchRecipes