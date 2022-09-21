import { useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../utils/Firebase/Firebase';

import CategoriesPreview from './CategoriesPreview';
import Category from './Category';

import { setCategoriesMap } from '../store/CategoriesReducer';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA);
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoryMap));
    }
    getCategoriesMap();

}, []);

  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> } />
      <Route path=":category" element={ <Category /> } />
    </Routes>      
  );
};

export default Shop;
