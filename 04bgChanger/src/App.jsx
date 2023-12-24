import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    // Passing the color to main class so that it deliver the default color olive
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}> {/* Important :The color will be change based upon the onlick setColor value */}
        {/* Button container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Red button */}
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          {/* Green button */}
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          {/*Blue Button*/}
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
