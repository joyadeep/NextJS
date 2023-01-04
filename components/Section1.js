import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import CaresouelItem from './CaresouelItem'
import fetcher from '../lib/fetcher';
import LoadingSkeleton from './_child/loadingSkeleton'

const Section1 = () => {
  const {data,isLoading,isError}=fetcher('/api/trending')
  console.log("data=",data)
  SwiperCore.use([Autoplay])
  return (
    <>
    <Box px={3} >
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
      isLoading?<LoadingSkeleton/>:isError?"Error":data.map((item,index)=>(
        <SwiperSlide><CaresouelItem item={item}/></SwiperSlide>
      ))
     }
    </Swiper>
    </Box>
    
    </>
  )
}

export default Section1