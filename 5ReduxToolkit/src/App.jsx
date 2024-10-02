import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import './App.css'
import { increment, decrement, reset, incrementByAmount  } from './features/counter/counterSlice'


function App() {

  const[amount, setAmount] = useState("0");
  
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  function handleIncrementClick() {
      dispatch(increment());

  }

  function handleDecrementClick() {
      dispatch(decrement());

  }

  function handleReset() {
    dispatch(reset());

  }

  function handleReset() {
    dispatch(reset());

  }

  function handleIncAmount() {
    dispatch(incrementByAmount(amount));

  }

  return (
    
      <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>

        <br />
        <br />

        <button onClick={handleReset}> Reset </button>

        <br />
        <br />

        <input type="number" placeholder="Enter Amount" value={amount}
                onChange={(e) => setAmount(e.target.value)} />

        <br />
        <br />

        <button onClick={handleIncAmount}> Increment By Amount </button>

        
      </div>
    
  )
}

export default App
