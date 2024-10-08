import React, {useState} from 'react';
import useInput from './useInput';

const UserForm = () => {

  // const [fName, setFName] = useState('');
  // const [lName, setLName] = useState('');

  const [fName, bindFName, resetFName] = useInput('');
  const [lName, bindLName, resetLName] = useInput('');

  const onSubmitHandler = e => {
    e.preventDefault();
    alert(`Hello ${fName} ${lName}, your form submitted`);

    resetFName();
    resetLName();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>First Name</label>
          <input
            {...bindFName}
            type='text'
          />
          {/* <input
            type='text'
            value={fName}
            onChange={e => setFName(e.target.value)}
          /> */}
        </div>
        <div>
          <label>Last Name</label>
          <input
            {...bindLName}
            type='text'
          />
          {/* <input 
            type='text'
            value={lName}
            onChange={e => setLName(e.target.value)}
          /> */}
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm