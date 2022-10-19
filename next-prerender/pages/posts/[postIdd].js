import React from 'react'
import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()

  // fallback page for pages awaiting prerender success

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h3>{post.id}: {post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  const data = await response.json()

  const paths = data.slice(0,10).map(item => {
    return {
      params: {
        postIdd: `${item.id}`
      }
    }
  })
  
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postIdd}`)
  
  const data = await response.json()
// if the the dynamic id out of range, any of th epost keys can be used to check
  if(!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: data,
    }
  }
}
