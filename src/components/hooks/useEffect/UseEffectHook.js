import React, {useState, useEffect} from 'react';

//The useEffect Hook allows you to perform side effects in your components
//useEffect runs on every render.
//We should always include the second parameter which accepts an array, due to which it renders on first render

const UseEffectHook = () => {

  const [count, setCount] = useState(0);

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