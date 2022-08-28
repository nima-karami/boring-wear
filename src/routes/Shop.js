import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';
import { useContext } from 'react';

import { CategoriesContext } from '../context/CategoriesContextProvider';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
      <Container maxWidth="false" sx={{ display: 'flex', flexWrap: 'wrap' , padding: '50px' }}>
        {
          Object.keys(categoriesMap).map( (title) => (
              categoriesMap[title].map(({ id, name, imageUrl, price }) => (
                <ProductCard key = {id} id = {id} name = {name} imageUrl = {imageUrl} price = {price} />
              ))
          ))
        }
      </Container>
  );
};

export default Shop;
