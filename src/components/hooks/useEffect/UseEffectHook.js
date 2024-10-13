import React, {useState, useEffect} from 'react';

//The useEffect Hook allows you to perform side effects in components after rendering, such as data fetching, subscriptions or manual DOM manipulations
//useEffect runs on every render.
//We should always include the second parameter which accepts an array, due to which it renders on first render
//Handling dependencies is to ensure that effect runs only when necessary and prevents unnecessary re-execution of effect, optimizing performance and avoiding potential bugs

const UseEffectHook = () => {

  const [count, setCount] = useState(0);

  //It renders on every render
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  const onButtonClick = () => {
    setCount(count +1)
  };

  return (
    <div>
      <button onClick={onButtonClick}>Count {count}</button>
    </div>
  )
}

export default UseEffectHook