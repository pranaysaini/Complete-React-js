import React, { useState, createContext } from 'react'; 
import './App.css'
import ChildA from './Components/ChildA';

const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
    <themeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{background : theme === 'light' ? 'beige' : 'black'}}>
        <ChildA />
      </div>
    </themeContext.Provider>
    </>
  )
}

export default App
export {themeContext}
