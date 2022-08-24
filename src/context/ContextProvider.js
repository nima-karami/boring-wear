import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, CreateUserDocumentFromAuth } from "../utils/Firebase/Firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
  
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                CreateUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default ContextProvider;