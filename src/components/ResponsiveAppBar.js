import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colorChannel } from '@mui/system';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import { UserContext } from '../context/UserContextProvider';
import { Link } from 'react-router-dom';
import { signOutUser } from '../utils/Firebase/Firebase';
import CartDrawer from './CartDrawer';

const pages = ['shop', 'pricing', 'blog'];
const settings = ['Profile', 'Account', 'Dashboard'];

const ResponsiveAppBar = () => {
  const { currentUser } = useContext(UserContext);
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserLogOut = async () => {
    await signOutUser();
    handleCloseUserMenu(); 
  };

  return (
    <AppBar position="static"   sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Boring Wear
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page} to={`${page}`}>
                    <MenuItem  onClick={handleCloseNavMenu} >
                        <Typography textAlign="center" >{page}</Typography>
                    </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link to="">
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Roboto',
                fontWeight: 700,
                letterSpacing: '.0rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Boring Wear
            </Typography>
          </Link>
          <Box  sx={{ display: { xs: 'flex', md: 'none' } }} >
            <CartDrawer anchor='bottom'/>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
              <Link key={page} to={`${page}`}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
              
            ))}


            
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', alignItems:'center' } }}>
            {
              currentUser ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Hello" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}

                      <MenuItem key={'logout'} onClick={handleUserLogOut}>
                        <Typography textAlign="center">Logout</Typography>
                      </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Link to="signin"><Button sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button></Link>
              )
            }

            <CartDrawer anchor = 'right'/>
            
          </Box>
           
          
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
