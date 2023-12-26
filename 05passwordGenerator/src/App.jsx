// Importing necessary React hooks from the 'react' library
import { useState, useCallback, useEffect, useRef } from 'react';

// Defining the functional component named 'App'
function App() {
  // State variables using the 'useState' hook
  const [length, setLength] = useState(8); // State for password length
  const [numberAllowed, setNumberAllowed] = useState(false); // State for including numbers in password
  const [charAllowed, setCharAllowed] = useState(false); // State for including special characters in password
  const [password, setPassword] = useState(""); // State for storing the generated password

  // 'useRef' hook to create a reference to the password input field
  const passwordRef = useRef(null);

  // Callback function for generating a password based on"current state values"
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Adding numbers to the character set if 'numberAllowed' is true
    if (numberAllowed) str += "0123456789";

    // Adding special characters to the character set if 'charAllowed' is true
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // Looping to generate a password of the specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Updating the 'password' state with the generated password
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Callback function for copying the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook to generate a password when component mounts or when relevant state values change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Rendering the UI using JSX
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value); }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

// Exporting the 'App' component as the default export
export default App;
