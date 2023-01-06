import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const catItem = (item) => {
    const {title,subtitle,published,category,img,author}=item.item
  return (
    <Card component={Link} href="/posts/post" elevation={0} sx={{display:'flex',mb:2,height:'200px',bgcolor:'#fafafa',textDecoration:'none'}}>
    <CardMedia>
        <Image src={img} alt={img} style={{objectFit:'cover'}} width={'200'} height={200} />
    </CardMedia>
    <CardContent>
    <Box sx={{display:'flex',gap:1}}>
    <Typography sx={{color:'orange'}}>{category}</Typography>
    <Typography>- {published}</Typography>
</Box>
<Typography variant='body1' py={1} sx={{color:'black'}}>
{title}
</Typography>
<Typography fontSize={'12px'} textOverflow='ellipsis' overflow={'hidden'} >
{subtitle}
</Typography>
<Box mt={3} display='flex' gap={1}>
    <Avatar sx={{width:34, height:34}} src='/images/user.jpg'/>
    <Box>
        <Typography variant='body2' fontWeight='bold'>{author.name}</Typography>
        <Typography fontSize={'12px'}>{author.designation}</Typography>
    </Box>
</Box>

    </CardContent>
</Card>
  )
}

export default catItem