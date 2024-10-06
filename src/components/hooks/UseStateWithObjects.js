import React, {useState} from 'react'

const UseStateWithObjects = () => {

  const [name, setName] = useState({fName: '', lName: ''});

  return (
    <div>
      <form>
        <input 
          type="text" 
          value={name.fName}
          onChange={e => setName({...name, fName: e.target.value})}
        />
        <input 
          type="text" 
          value={name.lName}
          onChange={e => setName({...name, lName: e.target.value})}
        />
        <h2> Your First Name is - {name.fName} </h2>
        <h2> Your Last Name is - {name.lName} </h2>
      </form>
    </div>
  )
}

export default UseStateWithObjects