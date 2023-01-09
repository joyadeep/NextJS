import { Avatar, Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Related from '../../components/_child/Related'
import Layout from '../../layout/Layout'
import getPost from '../../lib/helper';
import data from '../api/data'

const post = ({title,description,author,subtitle,category,published,img}) => {
  return (
   <Layout>
     <Container maxWidth='md' sx={{display:'flex',flexDirection:'column',alignItems:'center',mt:3}}>
      <Avatar sx={{width:60, height:60}} src='/images/user.jpg'/>
      <Typography variant='h6' fontWeight='bold'>{author.name}</Typography>
      <Typography variant='body2'>{author.designation}</Typography>
      <Typography variant='h4' py={2} width='100%'>
                {title}
            </Typography>
            <Image src={img}  style={{objectFit:'cover',width:'100%'}} width={600} height={600} />
            <Box sx={{display:'flex',gap:3,width:'100%'}}>
                <Typography sx={{color:'orange'}}>{category}</Typography>
                <Typography>- {published}</Typography>
            </Box>
            <Typography variant='h6' sx={{textAlign:'justify'}}>
           {description}
            </Typography>
               
    </Container>
    <Related/>
   </Layout>
  )
}

export default post


export async function getStaticProps( { params } ){
  // const posts = await getPost(params.postId)
  const{Posts}=data;
  const posts=await Posts.find(item=>params.postId==item.id)

  return {
      props : posts
  }
}

export async function getStaticPaths(){
  const{Posts}=data;
  // const posts = await getPost();
  const paths = Posts.map(value => {
      return {
          params : {
              postId : value.id.toString()
          }
      }
  })

  return {
      paths,
      fallback : false
  }

}