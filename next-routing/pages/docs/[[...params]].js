import React from 'react'
import { useRouter } from 'next/router'

// catch all routes returns an array of all the routes in the query string

const Doc = () => {
  const router = useRouter()
  const { params = [] } = router.query
  // scenario for feature/concept/example
  if(params.length === 2) {
    return (
      <h1>Viewing docs for feature {params[0]} and concept {params[1]}</h1>
    )
    } else if (params.length === 1) {
      return(
        <h1>Viewing docs for feature {params[0]}</h1>
      )
    }
    // if the user goes beyond 2 level nesting, docs homepage is to be rendered
    return <h1>Docs Home Page</h1>
  
}

export default Doc
