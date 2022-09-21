import { combineReducers } from "redux";

import { userReducer } from "./UserReducer";
import { categoriesReducer } from "./CategoriesReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer,
})