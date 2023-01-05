import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fetcher from '../lib/fetcher'
import CatItem from './_child/catItem'
const Categories = () => {
    const {data,isLoading,isError}=fetcher("/api/posts");
  return (
    <Container fixed>
        {
            isLoading?"Loading":isError?"Error":<Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant='h5' align='center'>Business</Typography>
                   <CatItem item={data[0]}/>
                   <CatItem item={data[2]}/>
                   <CatItem item={data[4]}/>
                   <CatItem item={data[5]}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h5' align='center'>Travel</Typography>
            <CatItem item={data[1]}/>
            <CatItem item={data[3]}/>
            <CatItem item={data[0]}/>
            </Grid>
        </Grid>
        }
    </Container>

  )
}

export default Categories