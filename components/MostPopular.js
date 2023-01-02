import { Avatar, Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

const MostPopular = () => {
  return (
    <Container fixed sx={{my:3}}>
        <Typography variant='h4' align='center' mb={1}>Most Popular</Typography>
        <Swiper slidesPerView={2}
        spaceBetween={20} loop={true}>
           {[1,2,3,4,5,6].map(()=> <SwiperSlide>
            <Card elevation={0} sx={{bgcolor:'#fafafa'}}>
                <CardMedia>
                    <Image src={'/images/flowerpot.jpg'} style={{objectFit:'cover',width:'100%'}} width={'500'} height={200} />
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
            </SwiperSlide>
            )}
        </Swiper>
    </Container>
  )
}

export default MostPopular