import { createContext, useState } from "react";


export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {}
});

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = [...cartItems];

        if (newCartItems.find(cartItem => cartItem.id === productToAdd.id ? cartItem.quantity += 1 : null)) {
        
        } else {
            newCartItems.push({...productToAdd, quantity: 1})
        }

        console.log('cart items: ', newCartItems);
        setCartItems(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        let newCartItems = [...cartItems];
    
        if (productToRemove.quantity > 1) {
            
            newCartItems.find(cartItem => cartItem.id === productToRemove.id ? cartItem.quantity -= 1 : null);
            
        } else {
            
            const filtered = cartItems.filter( (value, index, arr) => {
                return value !== productToRemove;
            });
            newCartItems = [...filtered];
        }
        
        console.log('cart items: ', newCartItems);
        setCartItems(newCartItems);
      }
    
    const value = { cartItems, setCartItems, addItemToCart, removeItemFromCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;