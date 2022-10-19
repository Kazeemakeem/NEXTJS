import React from 'react'
import Posts from '../../components/posts'

const PostList = ({posts}) => {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map(post => {
        return(
          <div key={post.id}>
            <Posts post={post}/>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default PostList

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props: {
      posts: data.slice(0,10)
    }
  }
}