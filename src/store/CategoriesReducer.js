import { getCategoriesAndDocuments } from "../utils/Firebase/Firebase";



export const CATEGORIES_ACTION_TYPES = {
    FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE'

}

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
} 


export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true};
        
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, isLoading: false, categories: payload};

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
            return {...state, isLoading: false, error: payload};

        default:
            return state;  
    }
}

// ACTIONS

export const fetchCategoriesStart = () => {
    return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START}
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesArray };
}

export const fetchCategoriesFailure = (error) => {
    return { type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, payload: error }
}

export const fetchCategoriesStartAsync = () => async (dispatch) => {
    
      dispatch(fetchCategoriesStart());
      
      try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        dispatch(fetchCategoriesFailure(error));
      }
    
  };