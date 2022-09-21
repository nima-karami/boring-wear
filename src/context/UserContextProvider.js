import { createContext, useEffect, useState, useReducer } from "react";
import { onAuthStateChangedListener, CreateUserDocumentFromAuth } from "../utils/Firebase/Firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);  
    }
}

const INITIAL_STATE = {
    currentUser: null
} 

const UserContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    const { currentUser } = state;
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    const value = {currentUser, setCurrentUser};
  
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                CreateUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;