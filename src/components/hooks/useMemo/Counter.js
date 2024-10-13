import React, {useState, useMemo} from 'react'

//Used to memoize the result of a function and cache it, recalculating only if dependencies changes and provides memozied value
//When computing a value is expensive or time-consuming
//To prevent unnecessary re-computation of values across re-renders
//memoize a computed value and returns the cached value without causing re-renders

const Counter = () => {

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(10);

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 10)
  };

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 200000000) i++ //to make code execution slow
    return counterOne % 2 === 0
  }, [counterOne]);

  // const isEven = () => {
  //   let i = 0;
  //   while(i < 200000000) i++ //to make code execution slow
  //   return counterOne % 2 === 0
  // };

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne} </button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo} </button>
      </div>
    </div>
  )
}

export default Counter