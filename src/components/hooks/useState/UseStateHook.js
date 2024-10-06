import React, {useState} from 'react';

//useState Hook allows us to track state in a function component
//State generally refers to data or properties that need to be tracking in an application
//useState accepts an initial state and returns two values:
//1st value - The current state.
//2nd Value - A function that updates the state.
//Incase of array and objects always spread the values

const UseStateHook = () => {

  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count +1)
  };

  return (
    <div>
      <button onClick={onButtonClick}>Count {count}</button>
    </div>
  )
}

export default UseStateHook