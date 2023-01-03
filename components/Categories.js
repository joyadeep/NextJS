import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <Container fixed>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant='h5' align='center'>Business</Typography>
               {
                [1,2,3,4].map((index)=>(
                //  <Link href={'/posts/post'}>
                    <Card component={Link} href="/posts/post" key={index} elevation={0} sx={{display:'flex',mb:2,height:'200px',bgcolor:'#fafafa',textDecoration:'none'}}>
                    <CardMedia>
                        <Image src={'/images/flowerpot.jpg'} style={{objectFit:'cover'}} width={'200'} height={200} />
                    </CardMedia>
                    <CardContent>
                    <Box sx={{display:'flex',gap:1}}>
                    <Typography sx={{color:'orange'}}>Business, Travel</Typography>
                    <Typography>- 3 Jul,2022</Typography>
                </Box>
                <Typography variant='body1' py={1} sx={{color:'black'}}>
                    Your must unhappy customers are source of learning
                </Typography>
                <Typography fontSize={'12px'} textOverflow='ellipsis' overflow={'hidden'} >
                    Even the all-powerful pointing has no control about the blind text  it is an almost...
                </Typography>
                <Box mt={3} display='flex' gap={1}>
                    <Avatar sx={{width:34, height:34}} src='/images/user.jpg'/>
                    <Box>
                        <Typography variant='body2' fontWeight='bold'>John Von</Typography>
                        <Typography fontSize={'12px'}>CoFounder</Typography>
                    </Box>
                </Box>
    
                    </CardContent>
                </Card>
                //  </Link>
                ))
               }
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h5' align='center'>Travel</Typography>
               {
                [1,2,3,4].map((index)=>(
                    <Card component={Link} href="/posts/post" key={index} elevation={0} sx={{display:'flex',mb:2,height:'200px',bgcolor:'#fafafa',textDecoration:'none'}}>
                    <CardMedia>
                        <Image src={'/images/flowerpot.jpg'} style={{objectFit:'cover'}} width={'200'} height={200} />
                    </CardMedia>
                    <CardContent>
                    <Box sx={{display:'flex',gap:1}}>
                    <Typography sx={{color:'orange'}}>Business, Travel</Typography>
                    <Typography>- 3 Jul,2022</Typography>
                </Box>
                <Typography variant='body1' py={1} sx={{color:'black'}}>
                    Your must unhappy customers are source of learning
                </Typography>
                <Typography fontSize={'12px'} textOverflow='ellipsis' overflow={'hidden'} >
                    Even the all-powerful pointing has no control about the blind text  it is an almost...
                </Typography>
                <Box mt={3} display='flex' gap={1}>
                    <Avatar sx={{width:34, height:34}} src='/images/user.jpg'/>
                    <Box>
                        <Typography variant='body2' fontWeight='bold'>John Von</Typography>
                        <Typography fontSize={'12px'}>CoFounder</Typography>
                    </Box>
                </Box>
    
                    </CardContent>
                </Card>
                ))
               }
            </Grid>
        </Grid>
    </Container>

  )
}

export default Categories