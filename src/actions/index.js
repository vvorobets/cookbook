let currentRecipeId = 0;

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
});

export const visibilityFilters = {SHOW_ALL: 'SHOW_ALL', SHOW_BY_RATE: 'SHOW_BY_RATE', SHOW_FOUND: 'SHOW_FOUND'};

export const addRecipe = recipe => ({
    type: 'ADD_RECIPE',
    id: currentRecipeId++,
    recipe
});

export const viewRecipe = id => ({
    type: 'VIEW_RECIPE',
    id
});

export const editRecipe = (recipe, id) => ({
    type: 'EDIT_RECIPE',
    id
});

export const deleteRecipe = id => ({
    type: 'DELETE_RECIPE',
    id
});

export const setRate = (rate, id) => ({
    type: 'SET_RATE',
    rate
});