import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';
import { Fragment, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


import { CategoriesContext } from '../context/CategoriesContextProvider';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
      <Container maxWidth="false" sx={{ display: 'flex', flexWrap: 'wrap' , padding: '50px' }}>
        {
          Object.keys(categoriesMap).map( (title) => (
              <Fragment>
                <Link to={`${title}`}  className="ml-auto mr-auto">
                  <Typography variant='h6'> {title.toUpperCase()} </Typography>
                </Link>

                <Container maxWidth="false" sx={{ display: 'grid', justifyItems: 'center', gridTemplateColumns: { xs: 'repeat(1, 1fr)' , md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)'}, padding: '50px' }}>
                  { categoriesMap[title].slice(0, 5).map(({ id, name, imageUrl, price }) => (
                    <ProductCard key = {id} id = {id} name = {name} imageUrl = {imageUrl} price = {price} />
                  )) }
                </Container>
                
              </Fragment>
          ))
          
        }
      </Container>
  );
};

export default CategoriesPreview;