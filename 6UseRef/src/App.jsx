import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  let val = useRef(0);

  const btnRef = useRef();

  const handleClick = () => {
      val.current = val.current + 1;
      console.log("Value of val : ", val.current)
      setCount(count+1)
  }

  useEffect(() => {
    console.log("Rerendered Again")
  })

  const changeColor = () => {
    btnRef.current.style.backgroundColor = "red"
  }

  return (
    <div>
      
      <button ref = {btnRef} onClick={handleClick}>Increment</button>
      <br />
<br />
      
      <button onClick={changeColor}>
        Change Color
      </button>

      <div>
        count: {count}
      </div>
    </div>
  )
}

export default App
