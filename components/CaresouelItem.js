import { Avatar, Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CaresouelItem = () => {
  return (
    <>
    <Grid container >
        <Grid item md={6}>
        <Link href={"/about"}>
        <Image src={"/images/flowerpot.jpg"}  style={{objectFit:'cover'}} width={600} height={600} />
        </Link>

        </Grid>
        <Grid item md={6} sx={{display:'flex',flexDirection:'column',justifyContent:'center',pl:2}}>
            <Box sx={{display:'flex',gap:3}}>
                <Typography sx={{color:'orange'}}>Business, Travel</Typography>
                <Typography>- 3 Jul,2022</Typography>
            </Box>
            <Typography variant='h3' py={2} sx={{color:'gray'}}>
                Your must unhappy customers are source of learning
            </Typography>
            <Typography>
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

        </Grid>

    </Grid>
    </>
  )
}

export default CaresouelItem