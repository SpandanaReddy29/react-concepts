import React, {useReducer} from 'react';

//useReducer is a hook used for complex state management by utilizing reducer function
//It is an alernative for useState and provides way to update state based on defined actions
//useReducer accepts 2 parameters 1- reducer function, 2- initial State
//reducer accepts 2 parameter 1- currentState, 2- action
//To share the state globally useReducer is combined with useContext

const initialState = 0;
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const UseReducerSimpleState = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>INCREMENT</button>
      <button onClick={() => dispatch('decrement')}>DECREMENT</button>
      <button onClick={() => dispatch('reset')}>RESET</button>
    </div>
  )
}

export default UseReducerSimpleState