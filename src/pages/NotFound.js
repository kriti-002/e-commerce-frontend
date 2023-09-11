import { Container, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Container>
    </>
  )
}

export default NotFound