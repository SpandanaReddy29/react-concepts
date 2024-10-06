import React, {useState} from 'react';

const UseStateWithPrevState = () => {

  const initialCount = 0; 
  const [count, setCount] = useState(initialCount);

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)
  };

  const onDecrement = () => {
    setCount(prevCount => prevCount - 1)
  };

  const onReset = () => {
    setCount(initialCount)
  };

  const onIncrementFive = () => {
    for(let i=0; i<5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={onReset}>RESET</button>
      <button onClick={onIncrement}>INCREMENT</button>
      <button onClick={onDecrement}>DECREMENT</button>
      <button onClick={onIncrementFive}>INCREMENT 5</button>
    </div>
  )
}

export default UseStateWithPrevState