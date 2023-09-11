import { Grid, Typography } from '@mui/material';
import React from 'react'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function calculatePriceDetails(priceDetails) {
  const basePrice = parseInt(priceDetails.value, 10);
  const finalPrice = parseInt(
    (basePrice * (100 - priceDetails.discount)) / 100,
    10,
  );
  return {
    basePrice,
    finalPrice,
    isDiscounted: finalPrice !== basePrice,
  };
}

const CartCard = ({product}) => {
  const { finalPrice } = calculatePriceDetails(product.price)
  return (
    <Grid container sx={{backgroundColor: '#F3E5F5', paddingTop:'4%', borderBottom: '2px solid black'}}>
      <Grid item sm={3} xs={12} sx={{padding: '2%', overflow: 'hidden', marginRight: '2%'}}>
        <Link to={`/products/${product.id}`}>
        <img src={product.images[0]} alt={product.title} style={{height: '30vh'}}/>
        </Link>
      </Grid>
      <Grid item sm={2} xs={12}>
        <Typography variant='p' sx={{fontWeight: 'bold'}}>{product.title}</Typography>
        <Typography color="text.secondary" variant='body2'>by {product.brand}</Typography>
      </Grid>
      <Grid item sm={2} xs={12}>
        <Typography>Product Price: <div style={{fontWeight: 'bold'}}><CurrencyRupeeIcon/>{finalPrice.toLocaleString('en-IN')}</div></Typography>
      </Grid>
      <Grid item sm={2} xs={12} sx={{marginRight: '10%', marginLeft: '-5%'}}>
      
      <AddToCart description={product}/>
      </Grid>
      <Grid item sm={2} xs={12}>
          <Typography>Final Price : <div style={{fontWeight: 'bold'}}><CurrencyRupeeIcon/>{(finalPrice* product.quantity).toLocaleString('en-IN')}</div></Typography>
      </Grid>
      
    </Grid>
  )
}

export default CartCard