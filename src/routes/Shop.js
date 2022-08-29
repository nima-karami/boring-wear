import { Route, Routes} from 'react-router-dom';
import CategoriesPreview from './CategoriesPreview';

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview /> } />
    </Routes>      
  );
};

export default Shop;
