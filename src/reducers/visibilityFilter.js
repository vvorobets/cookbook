import { visibilityFilters } from "../actions/index";

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case "SHOW_ALL":
        case "SHOW_BY_RATE":
        case "SHOW_FOUND":
            return action.type
        default:
            return state
    }
}

export default visibilityFilter