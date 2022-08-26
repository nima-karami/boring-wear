import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    cartCount: 0,
    cartTotal: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {}
});

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(((total, cartItem) => total + cartItem.quantity), 0);
        const newCartTotal = cartItems.reduce(((total, cartItem) => total + cartItem.quantity*cartItem.price), 0);
        
        setCartCount(newCartCount);
        setCartTotal(newCartTotal);

    }, [cartItems])

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
                return value.id !== productToRemove.id;
            });
            newCartItems = [...filtered];
        }
        
        console.log('cart items: ', newCartItems);
        setCartItems(newCartItems);
      }
    
    const value = { cartItems, setCartItems, cartCount, cartTotal, addItemToCart, removeItemFromCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;