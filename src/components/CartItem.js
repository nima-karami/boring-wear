import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CartContext } from '../context/CartContextProvider';
import { color } from '@mui/system';


export default function CartItem({ cartItem }) {
    const { removeItemFromCart } = React.useContext( CartContext );

    const handleRemoveCartItem = () => {
        removeItemFromCart(cartItem);
      };

    
    const {name, quantity, price, imageUrl} = cartItem;

    return (
        <Card sx={{ display: 'block', mt: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 200, height: 200 }}
                image={imageUrl}
                alt={name}
            />
            <CardActionArea>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <CardContent sx={{ display: 'flex', py: '24px', pb: '0px', m: '0px' }} className="pa0">
                        <RemoveCircleOutlineIcon sx={{ cursor:'pointer',  fontSize: 20}} className='o-50 glow' onClick={handleRemoveCartItem}/>
                        <Typography component="span" variant="subtitle" sx={{ ml: '10px', mt: '0px'}}>
                            {name} x {quantity}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
            
        </Card>
        
    );
}
