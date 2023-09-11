import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { Button , Grid, Typography } from '@mui/material'
import React from 'react'
import { useCartDispatch, useCartState } from '../cart-context';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const AddToCart = ({description}) => {
    const { products } = useCartState();
    const dispatch = useCartDispatch();
  
    const cartEntry = products[description.id];
    return (
      <>
      {cartEntry ? (<Grid sx={{width: '100%', marginLeft: '35%'}}>
      <Grid container sx={{marginLeft: '-6%'}}>
      <Button item xs={4} sx={{height: '2%'}}
        onClick={() => dispatch({ type: 'decrement', payload: description })}
        startIcon={<RemoveIcon />} color='secondary' variant="contained"></Button>
      <Typography variant='h6' sx={{height: '2%', marginLeft: '5%', marginRight: '5%'}} item xs={4}>{cartEntry.quantity}</Typography>
      <Button item xs={4} sx={{height: '2%'}}
        onClick={() => dispatch({ type: 'increment', payload: description })}
        startIcon={<AddIcon />} color='secondary' variant="contained"
      ></Button>
    </Grid>
    </Grid>) : 
    (<Button sx={{width: '100%'}}
      onClick={() => dispatch({ type: 'increment', payload: description })}
      startIcon={<ShoppingCart />} color='secondary' variant="contained"
      >
      Add to cart
      </Button>)}
      </>
    )
     
}

export default AddToCart