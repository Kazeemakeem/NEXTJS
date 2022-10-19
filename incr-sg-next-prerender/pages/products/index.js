import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
      <h1>List of products</h1>
      {products.map(product => {
        return(
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()
  return {
    props: {
      products: data,
    },
    // to update stale data after 10 secs
    revalidate: 30,
  }
}
