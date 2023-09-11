import React, { useState } from 'react'
import {Alert, Button, Card, Grid, TextField, Typography} from '@mui/material'
import { useCartState } from '../cart-context';
import CartCard from '../components/CartCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AddHome from '@mui/icons-material/AddHome';

const Cart = () => {
  const { products, totalQuantity, totalPrice } = useCartState();
  const productIds = Object.keys(products).filter((id) => products[id]);
  const [name, setName]= useState('')
  const [number, setNumber]= useState(0)
  const [address, setAddress]= useState('')
  function handleSubmit(e){
    e.preventDefault();
    console.log(name, number, address)
  }
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
        
    <Grid sx={{width: '80%', marginTop: '4%', marginBottom: '4%'}}>
        <Card sx={{padding: '4%'}}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth placeholder='Name' value={name} onChange={e=>setName(e.target.value)} sx={{marginBottom: '2%'}}/>
          <TextField type="number" fullWidth placeholder='Mobile Number' value={number} onChange={e=> setNumber(e.target.value)} sx={{marginBottom: '2%'}}/>
          <TextField placeholder='Address' fullWidth value={address} onChange={e=> setAddress(e.target.value)} sx={{marginBottom: '4%'}}/>
          <Button variant='contained' color='secondary' type="submit" fullWidth startIcon={<AddHome/>}>Add Details</Button>
        </form>
        
        </Card>
    </Grid>
    <Grid>Added Details</Grid>
    <Button color="secondary" variant='contained' fullWidth startIcon={<TagFacesIcon/>}>Proceed to Payment</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default Cart