import { Avatar, Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Related from '../../components/_child/Related'
import Layout from '../../layout/Layout'

const post = () => {
  return (
   <Layout>
     <Container maxWidth='md' sx={{display:'flex',flexDirection:'column',alignItems:'center',mt:3}}>
      <Avatar sx={{width:60, height:60}} src='/images/user.jpg'/>
      <Typography variant='h6' fontWeight='bold'>John Von</Typography>
      <Typography variant='body2'>CoFounder</Typography>
      <Typography variant='h4' py={2} width='100%'>
                Your must unhappy customers are source of learning
            </Typography>
            <Image src={"/images/flowerpot.jpg"}  style={{objectFit:'cover',width:'100%'}} width={600} height={600} />
            <Box sx={{display:'flex',gap:3,width:'100%'}}>
                <Typography sx={{color:'orange'}}>Business, Travel</Typography>
                <Typography>- 3 Jul,2022</Typography>
            </Box>
            <Typography variant='h6'>
            According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.”
He took a sip of the drink. He wasn't sure whether he liked it or not, but at this moment it didn't matter. She had made it especially for him so he would have forced it down even if he had absolutely hated it. That's simply the way things worked. She made him a new-fangled drink each day and he took a sip of it and smiled, saying it was excellent.
She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn't help but feel that something horrible was about to happen.
Betty decided to write a short story and she was sure it was going to be amazing. She had already written it in her head and each time she thought about it she grinned from ear to ear knowing how wonderful it would be. She could imagine the accolades coming in and the praise she would receive for creating such a wonderful piece. She was therefore extremely frustrated when she actually sat down to write the short story and the story that was so beautiful inside her head refused to come out that way on paper.
            </Typography>
               
    </Container>
    <Related/>
   </Layout>
  )
}

export default post