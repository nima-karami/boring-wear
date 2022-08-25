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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export default function CartDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button variant= "outlined"  sx={{ m: 2, display: 'block' }} onClick={toggleDrawer(anchor, true)}>Checkout</Button>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            
            <Button sx={{ color: 'white', ml: '5px'}} onClick={toggleDrawer(anchor, true)}>
                <ShoppingCart sx={{ fontSize: 30}}/>
                <Typography sx={{ 
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
                    0
                    </Typography>
            
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
