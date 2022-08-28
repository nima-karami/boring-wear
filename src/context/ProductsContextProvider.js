import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from "../utils/Firebase/Firebase.js";

export const ProductsContext = createContext({
    products: []
});


const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    const value = { products };
     return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;