import React, {useState, useEffect} from 'react';

const UseEffectConditionally = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("UseEffect update document")
    document.title = `You clicked ${count} times`
  }, [count]);

  const onButtonClick = () => {
    setCount(count +1)
  };

  return (
    <div>
        <input
          type = 'text'
          value = {name}
          onChange = {e => setName(e)}
        />
      <button onClick={onButtonClick}>Count {count}</button>
    </div>
  )
}

export default UseEffectConditionally