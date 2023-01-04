import { Box, CircularProgress, Grid,Skeleton, Stack } from '@mui/material'
import React from 'react'

const loadingSkeleton = () => {
  return (
    <>
    {/* <Grid container spacing={2} >
    {
        [1,2,3,4].map((index)=>(
            <Grid key={index}  item xs={12} sm={12} md={4} lg={3}>
              <Stack spacing={0}>
              <Skeleton animation="wave" variant='rounded' width={'auto'} height={200} />
                <Skeleton variant='text' sx={{fontSize:'20px'}} />
                <Skeleton variant='text' sx={{fontSize:'30px'}}  />
                <Skeleton variant='rounded' width={'auto'} height={60} />
                <Box display={'flex'} gap={1}>
                <Skeleton variant="circular" width={40} height={40}/>
                <Box sx={{width:'100%'}}>
                <Skeleton variant="text" sx={{fontSize:'20px'}} />
                <Skeleton variant="text" sx={{fontSize:'12px',width:'100%'}} />
                </Box>

                </Box>
              </Stack>
            </Grid>
        ))
    }
    </Grid> */}
    <CircularProgress/>
    </>
  )
}

export default loadingSkeleton