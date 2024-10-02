import React, { useState, createContext } from 'react'; 
import './App.css'
import ChildA from './Components/ChildA'

// Step1: Create Context
// Step2: Wrap All Chiild inside provider
// Step3: Pass Value
//Step4: Consume vaue inside consumer

const newContext = createContext(); 

function App() {
  const [user, setUser] = useState({name: "Pranay Saini"});

  return (
    <>
        <newContext.Provider value = {user}>
          <ChildA />
        </newContext.Provider>
 
    </>
  )
}

export default App
export {newContext}