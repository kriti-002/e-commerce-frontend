import React from 'react'
import { Alert, Card, Grid, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <Grid container sx={{marginTop: '2%'}}>
      <Grid>
      <Card sx={{width: '80%', margin: '2% auto'}}>
      <AccountCircleIcon sx={{width: '100%', height: '20vh'}}/>
    <Typography variant="h3" align='center' >Hello , lorem Ipsum</Typography>
    <Typography variant="body1" align='center'>Email: lorem@test.com</Typography>
    </Card>
      </Grid>
    <Grid>
      <Typography variant='h3'>My Orders:</Typography>
      <Alert variant="filled" severity="info" sx={{backgroundColor: '#F3E5F5', color: '#631976'}} >
      No orders at the moment. <Link to='/'>Keep Shopping!</Link>
        </Alert>
    </Grid>
    </Grid>
  )
}

export default Profile