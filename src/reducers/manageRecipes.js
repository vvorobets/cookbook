const manageRecipes = (state = [], action) => {
    switch(action.type) {
        case 'ADD_RECIPE':
            return [...state, recipe]
        case 'EDIT_RECIPE':
            return state.map(item =>
                (item.id === action.id)
                ? recipe : item
            )
        case 'SET_RATE':
            return state.map(item =>
                (item.id === action.id)
                ? {...item, rate: rate} : item
            )
        case 'DELETE_RECIPE':
            return state.splice(id, 1)
        case 'VIEW_RECIPE':
        default:
            return state
    }
}

export default manageRecipes