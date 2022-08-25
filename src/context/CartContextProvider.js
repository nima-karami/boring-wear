import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {

}

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    addItemToCart: () => {}
});

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = [...cartItems];

        if (newCartItems.find(cartItem => cartItem.id === productToAdd.id ? cartItem.quantity += 1 : null)) {
        
        } else {
            newCartItems.push({...productToAdd, quantity: 1})
        }

        console.log(newCartItems);
        setCartItems(newCartItems);
    }
    
    const value = { cartItems, setCartItems, addItemToCart };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;