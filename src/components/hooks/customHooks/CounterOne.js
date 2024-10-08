import React, {useState} from 'react'
import useCounter from './useCounter'

const CounterOne = () => {

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(prevCount => prevCount + 1)
  // };

  // const decrement = () => {
  //   setCount(prevCount => prevCount - 1)
  // };

  // const reset = () => {
  //   setCount(0)
  // };

  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <h2>Count - {count} </h2>
      <button onClick={increment}> INCREMENT </button>
      <button onClick={decrement}> DECREMENT </button>
      <button onClick={reset}> RESET </button>
    </div>
  )
}

export default CounterOne