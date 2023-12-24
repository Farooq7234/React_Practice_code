import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  /* These lines of code are using the `useState` hook to declare and initialize state variables in a
  React functional component. */
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
    /* The `passwordGenerator` function is a callback function created using the `useCallback` hook. It
    generates a random password based on the specified length, and whether numbers and special
    characters are allowed. */

    const passwordGenerator = useCallback(() => {
     /* The code you provided is a part of the `passwordGenerator` function. It is responsible for
     generating a random password based on the specified length and whether numbers and special
     characters are allowed. */
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
      }

      setPassword(pass)


    }, [length, numberAllowed, charAllowed, setPassword])

    /* The `copyPasswordToClipboard` function is a callback function created using the `useCallback` hook.
    It is responsible for copying the generated password to the clipboard when the user clicks on the
    "copy" button. */

      const copyPasswordToClipboard = useCallback(() => {
       /* The code `passwordRef.current?.select(); passwordRef.current?.setSelectionRange(0, 999);
       window.navigator.clipboard.writeText(password)` is responsible for selecting the generated
       password and copying it to the clipboard. */
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
      }, [password])

    /* The `useEffect` hook is used to perform side effects in a React functional component. In this case,
    the `useEffect` hook is used to call the `passwordGenerator` function whenever there is a change in
    the `length`, `numberAllowed`, `charAllowed`, or `passwordGenerator` variables. */
    useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    
    /* The code you provided is a React component that represents a password generator. It renders a UI
    with the following elements: */
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>

   /* The code you provided is rendering a `div` element with a CSS class of "flex shadow rounded-lg
   overflow-hidden mb-4". Inside this `div`, there is an `input` element. */

    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        /* The `input tag` element is rendering an input field for displaying the generated password. */
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />

        /* The "button" element is rendering a button with the text "copy". It has an `onClick` event
        handler that calls the `copyPasswordToClipboard` function when the button is clicked. The
        `copyPasswordToClipboard` function is responsible for copying the generated password to the
        clipboard. The `className` attribute is used to apply CSS classes to style the button. */

        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        /* The `input` element with `type="range"` is rendering a slider input field. */
        <input 
        type="range"
        min={8}
        max={20}
        value={length}
         className='cursor-pointer'
         /* The `onChange={(e) => {setLength(e.target.value)}}` is an event handler that is triggered
         when the value of the input field with the `type="range"` changes. */
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
     /* The `input` element with `type="checkbox"` is rendering a checkbox input field. */
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          /* The `onChange` event handler is used to handle changes in the checkbox input field with
          the id "numberInput". */
          onChange={() => {
              /* The line `setNumberAllowed((prev) => !prev);` is toggling the value of the
              `numberAllowed` state variable. */
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">

        /* The code you provided is rendering a checkbox input field with the label "Characters". */
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App