<<<<<<< HEAD
import { createContext, useEffect, useState, useReducer } from "react";
=======
import { createContext, useEffect, useReducer, useState } from "react";
>>>>>>> 35a200973a6defb3fb8799ddfede0a4a1bd88f1c
import { onAuthStateChangedListener, CreateUserDocumentFromAuth } from "../utils/Firebase/Firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

<<<<<<< HEAD

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
=======
const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const UserContextProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    
>>>>>>> 35a200973a6defb3fb8799ddfede0a4a1bd88f1c
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