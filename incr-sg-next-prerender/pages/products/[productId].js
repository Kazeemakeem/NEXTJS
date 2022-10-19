import React from 'react'
import { useRouter } from 'next/router'

const Product = ({ product }) => {
  const router = useRouter()

  // fallback page for pages awaiting prerender success

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h3>{product.id} {product.title} {product.price}</h3>
      <p>{product.description}</p>
    </>
  )
}

export default Product

export const getStaticPaths = async () => {
  
  return {
    paths: [{ params: { productId: '1'}}],
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const response = await fetch(`http://localhost:4000/products/${params.productId}`)
  
  const data = await response.json()
// if the the dynamic id out of range, any of th eproduct keys can be used to check
  if(!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data,
    },
    revalidate: 30,
  }
}
