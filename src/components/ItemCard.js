import React from 'react'
import {Card, CardActions, CardContent, Grid, Rating, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import AddToCart from './AddToCart'
import Carousel from './Carousel'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ItemCard = ({item}) => {
  const images= item.images.slice(0,4)
  return (
    <Card sx={{ maxWidth: 400, height: 820 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          <Grid item sm={6} xs={12}><Rating name="read-only" defaultValue={item.rating.value} readOnly /></Grid>
        </Typography>

        <Typography>
        <Typography variant="h6">You Pay :<span> <CurrencyRupeeIcon />{(Math.floor((item.price.value* (100-item.price.discount))/100)).toLocaleString('en-IN') }</span></Typography>
        <Typography color="error">({item.price.discount} % off)</Typography>
        <Typography variant="body2" color="text.secondary">M.R.P. :<span style={{textDecoration: 'line-through'}}><CurrencyRupeeIcon/> {item.price.value.toLocaleString('en-IN')}</span></Typography>
        </Typography>

      </CardContent>
      <Grid container sx={{height: '80vh'}}>
      <Grid item xs={12} >
      <Link to={`/products/${item.id}`}>
      <Carousel list={images} />
      </Link>
      </Grid>
      </Grid>
      <CardActions>
      <AddToCart description={item}/>
      </CardActions>
    </Card>
  )
}

export default ItemCard