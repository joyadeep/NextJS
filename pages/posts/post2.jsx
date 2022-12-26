import React from 'react'

const post2 = ({posts}) => {
  return (
    <>
    <h2>Post2</h2>
    <h4>{posts.title}</h4>
    <h5>{posts.description}</h5>
    </>
  )
}

export default post2

const getStaticProps=async()=>{
    const posts={
        title:'Post 2',
        description:'description of post 2'
    }
    return{
        props:{posts}
    }
}
export {getStaticProps};