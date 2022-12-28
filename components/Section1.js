import { Box, Typography } from '@mui/material'
import React from 'react'
import CaresouelItem from './CaresouelItem'

const Section1 = () => {
  return (
    <>
    <Box py={4} px={3} >
        <Typography variant='h4' align='center' fontWeight={'bold'}>Trending</Typography>
        <CaresouelItem/>
    </Box>
    
    </>
  )
}

export default Section1