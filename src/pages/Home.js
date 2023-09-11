import React, { useState } from 'react'
import { FormControl, Grid, InputLabel, Select, Typography } from '@mui/material';
import Carousel from '../components/Carousel'
import ItemCard from '../components/ItemCard'
import data from '../const/data.json'
import {banners} from '../const/banners'

const Home = () => {
  const sortByRatings= data.filter((item)=> item.rating.value>=2).sort((a,b)=>b.rating.value-a.rating.value)
  const sortByPrice= data.filter(item=> item.price.value>=20000).sort((a,b)=> a.price.value- b.price.value)
  const [sortBy, setSortBy]= useState('default')
  
  return (
    <>
    <Carousel list={banners} />
    <Grid container sx={{marginTop: '2%', marginBottom: '2%'}}>
      <Grid item xs={7}>
        <Typography variant='h4' sx={{marginLeft: '1%'}}>Items you may like</Typography>
      </Grid>
      <Grid item xs={5}>
      <FormControl variant="outlined" fullWidth sx={{marginRight: '1%'}}>
      <InputLabel htmlFor="sort-by-select">Sort By</InputLabel>
      <Select
        native
        value={sortBy}
        onChange={e=> setSortBy(e.target.value)}
        label="Sort By"
        inputProps={{
          name: 'sort-by',
          id: 'sort-by-select',
        }}
      >
        <option value="default">Default</option>
        <option value="rating">Rating (Greater than 2)</option>
        <option value="price">Price (Greater than 20,000)</option>
      </Select>
    </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{marginLeft: '0.25%'}}>
    {sortBy==="default" ? (data.map((item)=>(
          <Grid item xs={12} sm={4} key={item.id}>
            <ItemCard item={item}/>
          </Grid>
        ))) : (sortBy==="rating" ? (sortByRatings.map((item)=>(
          <Grid item sm={4} xs={12} key={item.id}>
            <ItemCard item={item}/>
          </Grid>
        
        ))) :
        (sortByPrice.map((item)=>(
          <Grid item sm={4} xs={12} key={item.id}>
            <ItemCard item={item}/>
          </Grid>
        ))))}
    </Grid>
    </>
  )
}

export default Home