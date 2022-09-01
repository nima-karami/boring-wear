import { createContext, useEffect, useReducer, useState } from "react";


const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
  };

const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
};

const createAction = (type, payload) => ({ type, payload });

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }

};

export const CartContext = createContext({
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {}
});

const CartContextProvider = ({ children }) => {

    const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(((total, cartItem) => total + cartItem.quantity), 0);
        const newCartTotal = newCartItems.reduce(((total, cartItem) => total + cartItem.quantity*cartItem.price), 0);
        
        const payload = {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal,
          };
      
          dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
    }


    const addItemToCart = (productToAdd) => {
        const newCartItems = [...cartItems];

        if (newCartItems.find(cartItem => cartItem.id === productToAdd.id ? cartItem.quantity += 1 : null)) {
        
        } else {
            newCartItems.push({...productToAdd, quantity: 1})
        }

        console.log('cart items: ', newCartItems);
        updateCartItemsReducer(newCartItems);
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
        updateCartItemsReducer(newCartItems);
      }
    
    const value = { cartItems, cartCount, cartTotal, addItemToCart, removeItemFromCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;