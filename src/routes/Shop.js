import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';
import { useContext } from 'react';

import { ProductsContext } from '../context/ProductsContextProvider';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
      <Container maxWidth="false" sx={{ display: 'flex', flexWrap: 'wrap' , padding: '50px' }}>
        {products.map(({ id, name, imageUrl, price }) => (
            <ProductCard key = {id} id = {id} name = {name} imageUrl = {imageUrl} price = {price} />
        ))}
      </Container>
  );
};

export default Shop;
