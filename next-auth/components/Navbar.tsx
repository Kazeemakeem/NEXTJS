import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

// if you get error importing the client module add declare module 'next-auth/client' in next-env.d.ts

const Navbar = () => {
  //@ts-ignore
  const { data: session, loading } = useSession()
  return (
    <nav className='header'>
      <h1>
        <a href='#'>NEXTAUTH</a>
      </h1>
      <ul className='main-nav'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        {!session && !loading && (
          <li>
          <Link href='/api/auth/signin'>
            <a
            onClick={(e) => {
              e.preventDefault()
              signIn('github')
            }} >Sign In</a>
          </Link>
        </li>
        )}
        {session && (
          <li>
          <Link href='/api/auth/signout'>
            <a
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}>Sign Out</a>
          </Link>
        </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
