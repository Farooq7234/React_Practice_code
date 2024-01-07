import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Userpassword() {
  const {user} = useContext(UserContext)
  
  
  if(!user) return <div>Please Login</div>

  return <div>Your password is {user.password}</div>
}

export default Userpassword