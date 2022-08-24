import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ id, name, imageUrl, price }) {
  return (
    <Card key = {id} sx={{ maxWidth: 345, margin: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= {imageUrl}
          alt= {name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet. Quo accusantium culpa ea repellendus rerum eum veniam minima non necessitatibus minima est doloribus rerum. Qui recusandae autem est nihil odit ut delectus facilis. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          $ {price}
        </Button>
      </CardActions>
    </Card>
  );
}
