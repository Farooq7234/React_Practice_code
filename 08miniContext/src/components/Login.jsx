import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext) // At the end the data is now in setUser both username and password look handlesubmit function 

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <>
      <h2>Login</h2>
      <input type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )

}

export default Login