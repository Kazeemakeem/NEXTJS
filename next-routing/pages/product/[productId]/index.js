import React from 'react'
import { useRouter } from 'next/router'

// DYNAMIC ROUTING

const ProductDetails = () => {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <div>
      <h1>Product {productId} details</h1>
    </div>
  )
}

export default ProductDetails
