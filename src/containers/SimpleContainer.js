import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImgMediaCard from '../components/ImgMediaCard';

export default function SimpleContainer() {

    const categories = [
        {
            id: 1,
            title: 'Hats'
        },
        {
            id: 2,
            title: 'T-Shirts'
        },
        {
            id: 3,
            title: 'Pants'
        },
        {
            id: 4,
            title: 'Sweaters'
        },
        {
            id: 5,
            title: 'Joggers'
        },
    ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" sx={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' , padding: '50px' }}>
        {categories.map(({ title }) => (
            <ImgMediaCard title = {title}/>
        ))}
      </Container>
    </React.Fragment>
  );
}
