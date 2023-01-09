import useSWR from 'swr'
import React from 'react'
const response = (...args) => fetch(...args).then(res => res.json())
const baseURL='https://cozy-donut-5fa7d5.netlify.app/'

const Fetcher=(endpoint)=>{
    const {data,error}=useSWR(`${baseURL}${endpoint}`,response);
    return{
        data,
        isLoading:!error && !data,
        isError:error
    }
}

export default Fetcher;