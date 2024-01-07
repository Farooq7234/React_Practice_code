
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Userpassword from './components/Userpassword'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React Login Page</h1>
      <Login/>
      <Profile/>
      <Userpassword />
    </UserContextProvider>

    // With help of useContext hook we passed the data of login to profile without passing using props
  )
}

export default App
