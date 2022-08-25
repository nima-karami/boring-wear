import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import CartItem from './CartItem';

import { CartContext } from '../context/CartContextProvider';

export default function CartDrawer({ anchor }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { cartItems, setCartItems, removeItemFromCart } = React.useContext( CartContext );

  const totalCartItems = cartItems.reduce(((total, item) => total + item.quantity), 0);

  const handleRemoveCartItem = (item) => {
    removeItemFromCart(item);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cartItems.map( (item) => (
            <ListItem key={item.id} disablePadding>
                {/* <img src='https://i.ibb.co/ZYW3VTp/brown-brim.png ' alt='' /> */}
                <ListItemButton>
                    <ListItemIcon>
                        <RemoveCircleOutlineIcon onClick={() => handleRemoveCartItem(item)}/>
                    </ListItemIcon>
                        <CartItem cartItem = {item}/>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
         )
        )}
        
        
      </List>
      <Divider />
      <Button variant= "outlined"  sx={{ m: 2, display: 'block' }} onClick={toggleDrawer(anchor, true)}>Checkout</Button>
    </Box>
  );

  return (
    <div>
      {[anchor].map((anchor) => (
        <React.Fragment key={anchor}>
            
            <Button sx={{ color: 'white', ml: '5px'}} onClick={toggleDrawer(anchor, true)}>
                <ShoppingCart sx={{ fontSize: 30}}/>
                { totalCartItems ? (<Typography sx={{ 
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
                    {totalCartItems}
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
