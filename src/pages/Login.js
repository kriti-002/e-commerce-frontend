import React, {useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
  
const Login = () => {
  const navigate= useNavigate()
    const containerStyles = {
        background : `linear-gradient(
          rgba(255, 255, 255, 0.6),
          rgba(255, 255, 255, 0.6)),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
              center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Needed for the overlay
      };
    
      const contentStyles = {
        zIndex: 1,
        backgroundColor: 'transparent',
      }
      const [email, setEmail]= useState('')
      const[password, setPassword] =useState('')

      function handleSubmit(e){
        e.preventDefault()
        console.log(email, password)
        navigate('/')
      }
     
  return (
    <>
    <Box style={containerStyles}>
        
      <Box style={contentStyles}>
      <Typography align='center' variant='h4'>Sign In to <em>LIFE-CART</em></Typography>
        <form onSubmit={handleSubmit}>
            <TextField type="email" placeholder="Enter your email" fullWidth value={email} onChange={(e)=> setEmail(e.target.value)} sx={{marginTop: '2%',}}/>
            <TextField type="password" placeholder="Enter your password" fullWidth value={password} onChange={e=> setPassword(e.target.value)} sx={{marginTop: '2%',}}/>
            <Button type="submit" color="secondary" variant="contained" fullWidth sx={{marginTop: '2%',}}>Sign-in</Button>
        </form>
        <Typography variant="h6" align="center" sx={{marginTop: '2%', fontSize: '24px'}}>Don't have an account?<Button href='/sign-up' color="inherit">Sign-Up.</Button></Typography>
      </Box>
    </Box>
    </>
  )
}

export default Login