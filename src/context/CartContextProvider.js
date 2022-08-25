import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: []
});

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([1, 2, 3]);
    const value = { cartItems };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;