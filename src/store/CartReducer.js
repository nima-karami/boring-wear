
// Helper functions
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = [...cartItems];

    if (!newCartItems.find(cartItem => cartItem.id === productToAdd.id ? cartItem.quantity += 1 : null)) {
        newCartItems.push({...productToAdd, quantity: 1})
    } 
    // console.log('cart items: ', newCartItems);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    let newCartItems = [...cartItems];

    if (productToRemove.quantity > 1) {
        newCartItems.find(cartItem => cartItem.id === productToRemove.id ? cartItem.quantity -= 1 : null);
    } else {
        const filtered = cartItems.filter( (value, index, arr) => {
            return value.id !== productToRemove.id;
        });
        newCartItems = [...filtered];
    }
    // console.log('cart items: ', newCartItems);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
  }

export const setCartItems = (items) => {
    const cartItems = items;
    const cartCount = cartItems.reduce(((total, cartItem) => total + cartItem.quantity), 0);
    const cartTotal = cartItems.reduce(((total, cartItem) => total + cartItem.quantity*cartItem.price), 0);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems, cartCount, cartTotal} };
}

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_ITEMS',
    SET_CART_TOTAL: 'SET_CART_ITEMS'
}


export const INITIAL_STATE = {
    cartItems: []
}

export const cartReducer =  (state = INITIAL_STATE , action) => {
    const { type, payload } = action;
    
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            }

        default:
            return state;  
    }
}

