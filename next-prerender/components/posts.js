import React from 'react'
import Link from 'next/link'

const Posts = ({post}) => {
  return (
    // the passHref arg is for any child that is not an anchor tag
    <div>
      <Link href={`posts/${post.id}`} passHref>
        <p>{post.id}: {post.title}</p>
      </Link>
    </div>
  )
}

export default Posts
