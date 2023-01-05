import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fetcher from '../lib/fetcher'
import LoadingSkeleton from './_child/loadingSkeleton'
const LatestPost = () => {
    const {data,isLoading,isError}=fetcher('api/posts');
  return (
    <Box px={3}>
    <Typography align='center' letterSpacing={'-1px'} mb={3} variant='h4'>Latest Posts</Typography>
   
    {
        isLoading?<LoadingSkeleton/>:isError?"Error":<Grid container spacing={2} >
        {
         data.map((value)=>(
             <Grid key={value.id} item xs={12} sm={12} md={4} lg={3}>
             <Card component={Link} href={`/posts/${value.id}`} elevation={0} sx={{bgcolor:'#fafafa',textDecoration:'none'}}>
                 <CardMedia>
                     <Image src={value.img} style={{objectFit:'cover',width:'100%'}} width={'500'} height={200} />
                 </CardMedia>
                 <CardContent>
                 <Box sx={{display:'flex',gap:3}}>
                 <Typography sx={{color:'orange'}}>{value.category||"-"}</Typography>
                 <Typography>- {value.published || "unknown"}</Typography>
             </Box>
             <Typography variant='h5' py={2} sx={{color:'black'}}>
             {value.title}
             </Typography>
             <Typography variant='body2'>
                 {value.subtitle}
             </Typography>
             <Box mt={3} display='flex' gap={1}>
                 <Avatar sx={{width:60, height:60}} src='/images/user.jpg'/>
                 <Box>
                     <Typography variant='h6' fontWeight='bold'>{value.author.name}</Typography>
                     <Typography variant='body2'>{value.author.designation}</Typography>
                 </Box>
             </Box>
 
                 </CardContent>
             </Card>
         </Grid>
         
         ))
        }
     </Grid>
    }
    </Box>
  )
}

export default LatestPost