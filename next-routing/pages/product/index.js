import React from 'react'
import Link from 'next/link'

const ProductList = ({productId=100}) => {
  return (
    <div>
      <h1>
        <Link href= '/product/1'>
        <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href='/product/2'>
        <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        {/* replace redirect back <= to home. it replaces the current history */}
        <Link href='/product/3' replace> 
        <a>Product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
        <a>Product {productId}</a>
        </Link>
      </h1>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </div>
  )
}

export default ProductList
