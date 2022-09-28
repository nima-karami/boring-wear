import { useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from './CategoriesPreview';
import Category from './Category';

import { fetchCategoriesStartAsync } from '../store/CategoriesReducer';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());   
}, []);

  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> } />
      <Route path=":category" element={ <Category /> } />
    </Routes>      
  );
};

export default Shop;
