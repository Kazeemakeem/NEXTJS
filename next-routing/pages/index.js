import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/product')
    // router.replace('/product') this is to replace the route history
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a>Go to Blog</a>
      </Link>
      <Link href='/product'>
        <a>Check Products</a>
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}

export default Home
