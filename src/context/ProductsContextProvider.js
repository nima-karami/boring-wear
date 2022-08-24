import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: []
});

const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
     return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;