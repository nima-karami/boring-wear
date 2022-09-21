export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP'
}

const INITIAL_STATE = {
    categoriesMap: {}
} 


export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            return state;  
    }
}


export const setCategoriesMap = (categoriesMap) => {
    return { type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap };
}
