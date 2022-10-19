import React from 'react'
import Users from '../components/users'

const UsersList = ({users}) => {
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => {
        return(
          <div key={user.id}>
            <Users user={user}/>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data,
    }
  }
}