import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => null
});

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const value = cartItems;
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;