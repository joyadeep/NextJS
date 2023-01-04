import { Box, CircularProgress, Grid,Skeleton, Stack } from '@mui/material'
import React from 'react'

const loadingSkeleton = () => {
  return (
    <>
   <Box sx={{mx:'auto'}}>
    <CircularProgress/>
   </Box>
    </>
  )
}

export default loadingSkeleton