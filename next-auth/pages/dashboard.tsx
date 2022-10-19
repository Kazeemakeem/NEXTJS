import React, { useState, useEffect } from 'react'
import { useSession, getSession, signIn } from 'next-auth/react'

// This page is to be secured from users that are not logged in. useSession is always in loading state whether or not users is logged in or not so getSession is a better alternative. if you must use useSession, wrap the _app component with Provider

const Dashboard = () => {
  // @ts-ignore
  // const { data: session, loading } = useSession()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if(!session) {
        signIn()
      }else {
        setLoading(false)
      }
    }
    securePage()
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default Dashboard
