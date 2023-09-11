import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
  
const SignUp = () => {
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
        position: 'relative',
      };
    
      const contentStyles = {
        zIndex: 1,
        backgroundColor: 'transparent',
        padding: '2%',
      }
      const [name, setName]= useState('')
      const [email, setEmail]= useState('')
      const [password, setPassword] =useState('')

      function handleSubmit(e){
        e.preventDefault()
        console.log(name, email, password)
        navigate('/')
      }
     
  return (
    <>
    <Box style={containerStyles}>
      <Box style={contentStyles}>
      <Typography align='center' variant='h4'>Sign Up to <em>LIFE-CART</em></Typography>
        <form onSubmit={handleSubmit}>
            <TextField placeholder="Enter your full name" fullWidth value={name} onChange={(e)=> setName(e.target.value)} sx={{marginTop: '2%',}}/>
            <TextField type="email" placeholder="Enter your email" fullWidth value={email} onChange={(e)=> setEmail(e.target.value)} sx={{marginTop: '2%',}}/>
            <TextField type="password" placeholder="Enter your password" fullWidth value={password} onChange={e=> setPassword(e.target.value)} sx={{marginTop: '2%'}}/>
            <Button type="submit" color="secondary" variant="contained" fullWidth sx={{marginTop: '2%'}}>Sign-up</Button>
        </form>
        <Typography variant="h6" align="center" sx={{marginTop: '2%', fontSize: '24px'}}>Have an account?<Button href='/sign-in' color="inherit">Sign-In.</Button></Typography>
      </Box>
    </Box>
    </>
  )
}

export default SignUp