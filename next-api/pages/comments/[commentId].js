import React from 'react'
import { comments } from '../../data/comments'

const Comment = ({comment}) => {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  )
}

export default Comment

export const getStaticProps = async (context) => {
  const { params } = context
  const { commentId } = params

  // it is not recommended to call your own API (API route) within getStaticProps or getStaticPath
  
  const comment = comments.find(comment => comment.id === parseInt(commentId))

  return {
    props: {
      comment,
    }
  }
}

export const getStaticPath = async () => {
  return {
    paths: [
      { params: { commentId: '1' }},
      { params: { commentId: '2' }},
      { params: { commentId: '3' }}
    ],
    fallback: false,
  }
}
