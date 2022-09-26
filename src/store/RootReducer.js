import { combineReducers } from "redux";

import { userReducer } from "./UserReducer";
import { categoriesReducer } from "./CategoriesReducer";
import { cartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer,
    cart: cartReducer
})