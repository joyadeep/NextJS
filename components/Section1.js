import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import CaresouelItem from './CaresouelItem'

const Section1 = () => {
  SwiperCore.use([Autoplay])
  return (
    <>
    <Box py={4} px={3} >
        <Typography variant='h4' align='center' fontWeight={'bold'}>Trending</Typography>
        <Swiper
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        loop={true}
      spaceBetween={50}
      slidesPerView={1}
    >
     {
      [1,2,3,4].map((item,index)=>(
        <SwiperSlide><CaresouelItem/></SwiperSlide>
      ))
     }
    </Swiper>
    </Box>
    
    </>
  )
}

export default Section1