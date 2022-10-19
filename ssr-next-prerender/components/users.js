import React from 'react'

const Users = ({user}) => {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  )
}

export default Users
