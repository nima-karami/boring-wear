import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CartItem from './CartItem';

import { selectCartItems, selectCartCount, selectCartTotal } from '../store/CartSelector';

export default function CartDrawer({ anchor }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

 
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setTimeout(() => setState({ ...state, right: false }), 400) 
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, overflowY: 'auto' }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List disablePadding>
            {cartItems.length ? (cartItems.map( (item) => (
                <ListItem key={item.id} disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CartItem cartItem = {item}/>
                </ListItem>
                ) 
                )) : <Typography variant="h5" sx={{ m:3 }}> <SentimentVeryDissatisfiedIcon sx={{ fontSize: 40 }}/> <br /> Oops!! <br/> Nothing here yet...</Typography>
            }
            
        </List>
        <Divider sx={{ my: 2 }}/>
        <Typography variant="subtitle" sx={{ ml: 2, mt: 5 }}> Total: ${cartTotal}</Typography>
        
        <Button variant= "outlined"  sx={{ m: 2, display: 'block' }} onClick={goToCheckoutHandler}>Checkout</Button>
    </Box>
  );

  return (
    <div>
      {[anchor].map((anchor) => (
        <React.Fragment key={anchor}>
            
            <Button sx={{ color: 'white', ml: '5px'}} onClick={toggleDrawer(anchor, true)}>
                <ShoppingCart sx={{ fontSize: 30}}/>
                { cartCount ? (<Typography sx={{ 
                    borderRadius: '50%',
                    width:'20px',
                    height:'20px',
                    position:'relative',
                    left:'-12px',
                    top: '-12px',
                    mr: '-12px',
                    bgcolor: 'primary.main',
                    fontSize: 12,
                    display: 'flex',
                    align: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    {cartCount}
                    </Typography>):''}
            
            </Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                >
                {list(anchor)}
            </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
