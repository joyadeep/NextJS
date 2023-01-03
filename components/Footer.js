import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../config/theme'

const Footer = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',rowGap:2,bgcolor:theme.palette.secondary.light,py:3}}>
      <Typography variant='h4'>Subscribe to our newsletter</Typography>
      <TextField   placeholder='Enter your email' sx={{bgcolor:'white',borderRadius:'25px',width:'50%','& fieldset':{border:'none'}}}/>
      <Typography>Copyright 2022. All rights reserved</Typography>
    </Box>
  )
}

export default Footer