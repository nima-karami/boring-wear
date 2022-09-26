import { useContext } from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../components/CheckoutItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';

import { selectCartItems, selectCartTotal } from '../store/CartSelector';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    if (cartItems.length) {
        return (
            <Box  sx={{ display: 'block', flexWrap: 'wrap', width: {xs:'90%', md:'80%'}, margin: 'auto' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt:{xs: '50px', md: '100px'}, ml:'160px'}}>
                            <Grid xs={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                                <Typography>Product</Typography>
                            </Grid>
                            <Grid xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                                <Typography>Price/Unit</Typography>
                            </Grid>
                            <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                                <Typography sx={{ mx: 1}}>Quantity</Typography>
                            </Grid>
                            <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                                <Typography>Price</Typography>
                            </Grid>
                </Grid>
                
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem = {cartItem} />
                ))}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt:{xs: '25px', md: '25px'}, ml:'160px'}}>
                            <Grid xs={6} md={9} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                                
                            </Grid>
                            <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                                <Typography variant='h6'>Total: ${cartTotal}</Typography>
                            </Grid>
                </Grid>
          </Box>
        )
    } else {
        return <Typography variant='h4' sx={{ textAlign: 'center', mt: '100px' }}>Oops!! Nothing in your cart yet...</Typography>
    }
    
}

export default Checkout;