import SHOP_DATA from '../shop-data.json'
import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';

const Shop = () => {

  return (
      <Container maxWidth="false" sx={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' , padding: '50px' }}>
        {SHOP_DATA.map(({ id, name, imageUrl, price }) => (
            <ProductCard id = {id} name = {name} imageUrl = {imageUrl} price = {price} />
        ))}
      </Container>
  );
};

export default Shop;
