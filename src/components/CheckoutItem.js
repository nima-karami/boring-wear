import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { color } from '@mui/system';

import { selectCartItems } from '../store/CartSelector';
import { addItemToCart, removeItemFromCart } from '../store/CartReducer';

export default function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const handleRemoveCartItem = () => {
        dispatch(removeItemFromCart(cartItems, cartItem));
      };

    const handleAddCartItem = () => {
        dispatch(addItemToCart(cartItems, cartItem));
    }

    
    const {name, quantity, price, imageUrl} = cartItem;

    return (
        <Card sx={{ display: 'flex', mt: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 200, height: 200 }}
                image={imageUrl}
                alt={name}
            />
            <CardActionArea>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography variant='h6' sx={{ pl:3 }}>{name}</Typography>
                        </Grid>
                        <Grid xs={6} md={2}  sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography>${price}</Typography>
                        </Grid>
                        <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <ArrowBackIosNewIcon sx={{ cursor:'pointer',  fontSize: 20}} className='o-50 glow' onClick={handleRemoveCartItem}/>
                            <Typography sx={{ mx: 1}}>{quantity}</Typography>
                            <ArrowForwardIosIcon sx={{ cursor:'pointer',  fontSize: 20}} className='o-50 glow' onClick={handleAddCartItem} />
                        </Grid>
                        <Grid xs={6} md={3}  sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography>${price*quantity}</Typography>
                        </Grid>
                    </Grid>
                        
                </Box>
            </CardActionArea>
            
        </Card>
        
    );
}
