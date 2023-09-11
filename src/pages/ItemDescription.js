import { CircularProgress, Grid, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { cyan, yellow } from '@mui/material/colors'
import AddToCart from '../components/AddToCart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const ItemDescription = () => {
  const {id}= useParams()
  console.log(id)
  const [description, setDescription]= useState(null)
  useEffect(() => {
    async function fetchData(){
      const response= await axios.get(`https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products/${id}`)
      setDescription(response.data)
    }
    fetchData()
  }, [id])

    return(
      <>
      {description? (<Grid container sx={{marginTop: '2%'}}>
        <Grid item sm={6} xs={12} sx={{marginTop: '2%'}}>
          <Carousel list={description.images} />
        </Grid>
        <Grid item sm={6} xs={12}>
            <Typography align='center' variant="h4">{description.title}</Typography>
            <Typography align='center' color={cyan[600]}>Brand: {description.category}</Typography>
            <hr />
            {description.rating && (
              <Grid container sx={{margin: 'auto', width: '35%'}}>
                <Grid item sm={6} xs={12}><Rating name="read-only" defaultValue={description.rating.value} readOnly /></Grid>
                <Grid item sm={6} xs={12}><Typography color={yellow[900]} align='justify'>{description.rating.count} Ratings</Typography></Grid>
              </Grid>
            )}
            {description.price && (
              <Grid container sx={{margin: 'auto', width: '60%'}}>
                  <Grid container>
                    <Grid item sm={4} xs={12}><Typography variant='h5' color="error" align='center'sx={{marginRight: '4%'}}>-{description.price.discount}%</Typography></Grid>
                    <Grid item sm={4} xs={6}><Typography variant="p" sx={{fontSize: '20px'}} align='center'><span style={{fontWeight: 'bold'}}><CurrencyRupeeIcon />{(Math.floor((description.price.value* (100- description.price.discount))/100)).toLocaleString('en-IN')}</span></Typography></Grid>
                    <Grid item sm={4} xs={6}><Typography variant="body2" sx={{fontSize: '14px'}} align='center'><span style={{textDecoration: 'line-through'}}><CurrencyRupeeIcon/>{description.price.value.toLocaleString('en-IN')}</span></Typography></Grid>
                  </Grid>
                  
            </Grid>
            )}
              <AddToCart description={description}/>
            
            <hr/>
            <Grid sx={{margin: '2%'}}>
              {description.specs.length!==0 && (<Typography variant="h5">Specs:</Typography>)}
                {description.specs &&
                    description.specs.map((spec, i) => (
                        <ul key={i}>
                          <li><span style={{fontWeight: 'bold'}}> {spec.name}</span> : <span>{spec.value}</span></li>
                        </ul>
              ))}
          </Grid>
          <Grid sx={{margin: '2%'}}>
                <Typography variant="h5">About this item : </Typography>
                  <ul>
                    {description.features &&
                      description.features.map((feature, i) => (
                        <li key={i}>
                            {feature}
                        </li>
                    ))}
                  </ul>
          </Grid>
        </Grid>
    </Grid>) : (<CircularProgress sx={{width: '120%' , margin: 'auto'}} color="secondary" />)}
    </>
    )
}

export default ItemDescription