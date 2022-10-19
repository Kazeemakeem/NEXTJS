import React from 'react'
import { getSession } from 'next-auth/react'

const Blog = ({data}) => {
  return (
    <div>
      <h1>Blog Page</h1>
      <h2>{data}</h2>
    </div>
  )
}

export default Blog

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
// securing pages serverside,,,,,better to include the callback url as env variables
  if(!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      }
    }
  }
  return {
    props: {
      // serverside auth
      data: session ? 'List of 100 personalized blog posts' : 'List of free blog posts'
    },
  }
}
