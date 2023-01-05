import { Avatar, Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import fetcher from '../lib/fetcher'
import LoadingSkeleton from './_child/loadingSkeleton'
import Link from 'next/link'


const MostPopular = () => {
    const {data,isLoading,isError}=fetcher('api/popular');
  return (
    <Container fixed sx={{my:3}}>
        <Typography variant='h4' align='center' mb={1}>Most Popular</Typography>
        <Swiper slidesPerView={2}
        spaceBetween={20} loop={true}>
           {
            isLoading?<LoadingSkeleton/>:isError?"Error":
           data.map((item)=> <SwiperSlide>
           
            <Card component={Link} href={`/posts/${item.id}`} elevation={0} sx={{bgcolor:'#fafafa',textDecoration:'none'}}>
                <CardMedia>
                    <Image src={item.img} style={{objectFit:'cover',width:'100%'}} width={'500'} height={200} />
                </CardMedia>
                <CardContent>
                <Box sx={{display:'flex',gap:3}}>
                <Typography sx={{color:'orange'}}>{item.category}</Typography>
                <Typography>- {item.published}</Typography>
            </Box>
            <Typography variant='h5' py={2} sx={{color:'black'}}>
                {item.title}
            </Typography>
            <Typography variant='body2'>
                {item.subtitle}
            </Typography>
                </CardContent>
            </Card>
            </SwiperSlide>
            )}
        </Swiper>
    </Container>
  )
}

export default MostPopular