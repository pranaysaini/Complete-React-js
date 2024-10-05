import { useCallback, useState } from 'react'
import './App.css'
import ChildComp from './Components/ChildComp'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback( () => {
    setCount(count+1);
  }, [])

  return (
    <div>
      
      <div>
        Count: {count}
      </div>

      <button onClick={handleClick}>Increment</button>

      <ChildComp btnName="Click Me" newFunc={handleClick} />

    </div>
  )
}

export default App
