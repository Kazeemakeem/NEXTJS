import React, {useState} from 'react'
import { useRouter } from 'next/router'

//params can also be used to filter route content
// [[]] is used to wrap catch All routes for optional root navigation

const Houses = () => {
  const router = useRouter()
  const {params = []} = router.query
  if( params[0] === '100000' && params[1] === '1000000'){
    return (
      <h1>These are the houses within range of 100000 to 1000000</h1>
    )
  }
  return (
      <h1>These are all the houses</h1>
    )
  
}

export default Houses
