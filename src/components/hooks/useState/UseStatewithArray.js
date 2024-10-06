import React, {useState} from 'react'

const UseStateWithArray = () => {

  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      value: Math.floor(Math.random() * 10) +1
    }])
  };

  return (
    <div>
      <button onClick={addItem}> Add a Number: </button>
      <ul>
        {
          items.map(item => <li>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default UseStateWithArray