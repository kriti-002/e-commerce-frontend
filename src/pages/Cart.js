import React from 'react'
import {Alert, Button, Grid, Typography} from '@mui/material'
import { useCartState } from '../cart-context';
import CartCard from '../components/CartCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { products, totalQuantity, totalPrice } = useCartState();
  const productIds = Object.keys(products).filter((id) => products[id]);
  return (
    <>
    <Grid container sx={{ marginTop: '2%'}}>
      <Grid item xs={12} sm={9}>
      <Typography variant='h4'>Shopping Cart</Typography>
      <hr/>
      <Grid>
      {productIds.length!==0 ? (productIds.map((id) => (
            <CartCard key={id} product={products[id]} />
          ))) : (<Alert variant="filled" severity="info" sx={{backgroundColor: '#F3E5F5', color: '#631976'}} >
          No items in the cart. Go to <Link to='/'>Home</Link>
        </Alert>)}
      </Grid>
      </Grid>
      
      <Grid item xs={12} sm={3} sx={{padding: '1%'}}>
        <Typography>Subtotal ({totalQuantity} items): </Typography>
        <Typography variant='h5' color="secondary"><CurrencyRupeeIcon/>{totalPrice.toLocaleString('en-IN')}</Typography>
        <Button color="secondary" variant='contained' sx={{marginRight: '3%'}}>Proceed to Checkout</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default Cart