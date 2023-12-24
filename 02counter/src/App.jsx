import { useState } from 'react'
import './App.css'

function App() {

  // Use state is a hook which take which take two arguments variable and function and default value here 15

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  // addvalue adds the value 1 when ever add value button clicked it updates with previous value basically
  const addValue = () => {
    //counter = counter + 1

    // Checks conditon whether the value is greater 0 and less than 20 then do this statement
    if (counter>=0 && counter<20) {
      setCounter(prevCounter => prevCounter + 1)
    }
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }

  // Opposite to addValue that removes value by  1

  const removeValue = () => {
    // if the counter value is greater than 0 mean then execute the if code
    if (counter>0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
    {/* Here in the below h2 tag the counter variable will be updated each time we click the button */}
      <h2>Counter value: {counter}</h2>

    {/* onclick addvalue which adds value by 1 */}
      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />

      {/* onclick remove which by value 1  */}
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
