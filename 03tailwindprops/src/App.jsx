import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    // props is passed to the Card component 
    <>
    <Card  username="Alexander" btnTxt="Click Here" />
    <Card  username="juliya" btnTxt= "Visit Here" />
    </>
  )
}

export default App
