import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const[time, setTime] = useState(0);
  const timeRef = useRef();

  const startTimer = () => {
      timeRef.current = setInterval(() => {
        setTime(time => time+1);
      }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    
  }


  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>

      <button onClick={startTimer}>
        Start
      </button>

      <br />
      <br />

      <button onClick={stopTimer}>
        Stop
      </button>

      <br />
      <br />

      <button onClick={resetTimer}>
        Reset
      </button>


    </div>
  )
}

export default App
