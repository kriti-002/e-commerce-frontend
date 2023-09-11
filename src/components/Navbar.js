import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Badge, Button, Grid } from '@mui/material';
import { useCartState } from '../cart-context';
import {Link} from 'react-router-dom'


function Navbar() {
  const { totalQuantity } = useCartState();
  return (
    <AppBar position="static" sx={{backgroundColor : 'black'}}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>LIFE-CART</Link>
        </Typography>

        {/* Search bar */}
        <Grid sx={{ position: 'relative', xs:{marginLeft: '2%'}}}>
          <Grid sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '-30px' }}>
            <SearchIcon />
          </Grid>
          <InputBase
            sx={{color: 'white'}}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Grid>

        {/* Shopping cart icon */}
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>

        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Link>

        <IconButton color="inherit">
        <Button color="inherit" href='/sign-in'>SIGN IN/OUT</Button>
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
