import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CartContext } from '../context/CartContextProvider';

export default function ProductCard({ id, name, imageUrl, price }) {
    const { addItemToCart } = React.useContext(CartContext);
    
    return (
    <Card key = {id} sx={{ width: 300, margin: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= {imageUrl}
          alt= {name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            $ {price}
          </Typography>
          
        </CardContent>
        <Button size="small" variant= "outlined" color="primary" sx={{ margin: '10px' }} onClick={() => addItemToCart({ id, name, imageUrl, price })}>
          Add to Cart
        </Button>
      </CardActionArea>
    </Card>
  );
}
