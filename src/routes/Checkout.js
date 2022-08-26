import { useContext } from 'react';

import CheckoutItem from '../components/CheckoutItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';
import { CartContext } from '../context/CartContextProvider';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    
    return (
        <Box  sx={{ display: 'block', flexWrap: 'wrap', width: {xs:'90%', md:'80%'}, margin: 'auto' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt:{xs: '50px', md: '100px'}, ml:'160px'}}>
                        <Grid xs={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography>Product</Typography>
                        </Grid>
                        <Grid xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography>Price</Typography>
                        </Grid>
                        <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography sx={{ mx: 1}}>Quantity</Typography>
                        </Grid>
                        <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Typography>Total</Typography>
                        </Grid>
            </Grid>
            
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem = {cartItem} />
            ))}
      </Box>
    )
}

export default Checkout;