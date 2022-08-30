import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';
import { Fragment, useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../context/CategoriesContextProvider';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect( () => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])


  return (
      <Container maxWidth="false" sx={{ display: 'flex', flexWrap: 'wrap' , padding: '50px' }}>
        {
          <Fragment>
                <a href={`/${category}`}  className="ml-auto mr-auto">
                  <Typography variant='h6'> {category.toUpperCase()} </Typography>
                </a>

                <Container maxWidth="false" sx={{ display: 'grid', justifyItems: 'center', gridTemplateColumns: { xs: 'repeat(1, 1fr)' , md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)'}, padding: '50px' }}>
                  {products && 
                    products.map(({ id, name, imageUrl, price }) => (
                        <ProductCard key = {id} id = {id} name = {name} imageUrl = {imageUrl} price = {price} />
                    ))}
                </Container>
                
              </Fragment>
          
        }
      </Container>
  );
};

export default Category;
