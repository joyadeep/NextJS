import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const LatestPost = () => {
  return (
    <Box px={3}>
    <Typography align='center' letterSpacing={'-1px'} mb={3} variant='h4'>Latest Posts</Typography>
    <Grid container gap={4} alignItems='center'>
       {
        [1,2,3,4].map(()=>(
            <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card elevation={0} sx={{bgcolor:'#fafafa'}}>
                <CardMedia>
                    <Image src={'/images/flowerpot.jpg'} style={{objectFit:'cover',width:'100%'}} width={'500'} height={300} />
                </CardMedia>
                <CardContent>
                <Box sx={{display:'flex',gap:3}}>
                <Typography sx={{color:'orange'}}>Business, Travel</Typography>
                <Typography>- 3 Jul,2022</Typography>
            </Box>
            <Typography variant='h5' py={2} sx={{color:'black'}}>
                Your must unhappy customers are source of learning
            </Typography>
            <Typography variant='body2'>
                Even the all-powerful pointing has no control about the blind text  it is an almost orthographic life. One day however a small line of blind text
                by the name of lorem ipsum decided to leave for the far world grammar.
            </Typography>
            <Box mt={3} display='flex' gap={1}>
                <Avatar sx={{width:60, height:60}} src='/images/user.jpg'/>
                <Box>
                    <Typography variant='h6' fontWeight='bold'>John Von</Typography>
                    <Typography variant='body2'>CoFounder</Typography>
                </Box>
            </Box>

                </CardContent>
            </Card>
        </Grid>
        ))
       }
    </Grid>
    </Box>
  )
}

export default LatestPost