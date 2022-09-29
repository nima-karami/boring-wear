
import { CardElement } from '@stripe/react-stripe-js';


import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Box, Container } from '@mui/system';

const PaymentForm = () => {
    return (

        <Box  sx={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: {xs:'90%', md:'80%'}, margin: 'auto' }}>
            <CardElement />
            
            <Button>Pay Now</Button>
        </Box>
       
    )
}

export default PaymentForm;