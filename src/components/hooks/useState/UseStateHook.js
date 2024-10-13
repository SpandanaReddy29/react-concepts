import React, {useState} from 'react';

//useState Hook allows functional component to manage state by declaring state variable and a function to update them
//useState accepts an initial state and returns two values:
//1st value - The current state.
//2nd Value - A function that updates the state.
//Incase of array and objects always spread the values
//Manages state and triggers re-renders whenever state changes

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