import React from 'react'

const UserCArd = ({user}) => {
  return (
    <div>
      <h3>Name : {user.name}</h3>
      <p>Job : {user.role}</p>
      <p>status : {user.online?"🟢 online":" 🔴 offline"}</p>
    </div>
  )
}

export default UserCArd
