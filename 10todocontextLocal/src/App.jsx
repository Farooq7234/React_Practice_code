import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  
  // Important listen this carefully

  // First we create a usestate to add the values in the empty array
  const [todos,setTodos]=useState([])

  // with addTodo function we add values to the empty array of usestate 
  // we pass an argument todo just a name in which we used the setTodos with a callback to get access of all the previous values of todos useState
  // here we have to create an id for new todo and we don't want id to pass on the function you know why🙃.we are adding new todo at top of the array because this ...prev is written after it 

  const addTodo =(todo)=>{
    setTodos((prev)=>{[{id:Date.now(),...todo},...prev]})
  }

  // Algorithm in Urdu

  //Step 1: First callback access karte as prev
  //Step 2: Then callback se hamna sare previous values milgenge 
  //Step 3: Then prev values ku map ke use karko ek ek value ko visit karna hai map ka woch kaam {map can access each array}
  //Step 4: Map ke andar prevTodo diya hi ni woh ek array woh so hame ek array ko condition ke saath check karte hi aisach sare arre ke saath honga {looping}

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  // Algorithm in Urdu

  //Step 1: Delete karne id zaroorat
  //Step 2: Settodos se saare previous values access karte as usual.card
  //Step 3: Yaham me filter use kare renge ki kato hame jiska id match nhi hota woh sab hame filter karlete hinso
  //Step 4: Ab match karte ni so values ch display honge and matched is filtered😉

  const deleteTodo = ()=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }


  // Algorithm in Urdu

  // Step 1: yahan me upar kare jaisa zara kaam ranga same
  // Step 2: agar yahan ek todo (any array) match id se to hame ternary condition use kare hi
  // Step 3: prevTodo access kare then completed(by default false is the value) ko change kare using not operator  
  // step 4: agar true raya tho false hojanga aur agar false raya tho true hojanga

    const toggleComplete = ()=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo === id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  // id ? do this : or do this 👆

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
