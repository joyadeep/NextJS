import { Avatar, Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CaresouelItem = (item) => {
    console.log(item)
     const {id,title,description,category,published,author}=item.item;
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
                <Typography sx={{color:'orange'}}>{category}</Typography>
                <Typography>- {published}</Typography>
            </Box>
            <Typography variant='h3' py={2} sx={{color:'gray'}}>
                {title}
            </Typography>
            <Typography>
                {description}
            </Typography>
            <Box mt={3} display='flex' gap={1}>
                <Avatar sx={{width:60, height:60}} src='/images/user.jpg'/>
                <Box>
                    <Typography variant='h6' fontWeight='bold'>{author.name}</Typography>
                    <Typography variant='body2'>{author.designation}</Typography>
                </Box>
            </Box>

        </Grid>

    </Grid>
    </>
  )
}

export default CaresouelItem