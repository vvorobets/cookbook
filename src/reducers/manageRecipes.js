const manageRecipes = (state = [], action) => {
    switch(action.type) {
        case 'ADD_RECIPE_SUCCESS':
            return [...state, action.recipe]
        case 'EDIT_RECIPE_SUCCESS':
            return state.map(item =>
                (item.id === action.id)
                ? action.recipe : item
            )
        case 'SET_RATE_SUCCESS':
            return state.map(item =>
                (item.id === action.id)
                ? {...item, rate: action.rate} : item
            )
        case 'DELETE_RECIPE_SUCCESS':
            return [...state].filter(action.id, 1)
        case 'VIEW_RECIPE_SUCCESS':
        default:
            return state
    }
}

export default manageRecipes