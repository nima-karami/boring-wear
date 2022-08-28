import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from "../utils/Firebase/Firebase.js";
import { getCategoriesAndDocuments } from "../utils/Firebase/Firebase.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
});


const CategoriesContextProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    useEffect(() => {
        // addCollectionAndDocuments('categories', SHOP_DATA);
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();

    }, [])

    const value = { categoriesMap };
     return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesContextProvider;