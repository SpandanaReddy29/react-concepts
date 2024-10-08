import React, { useReducer } from 'react';
import ComponentA from './componentsUseReducer/ComponentA';
import ComponentB from './componentsUseReducer/ComponentB';
import ComponentC from './componentsUseReducer/ComponentC';

export const CountContext = React.createContext();

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

const UseReducerUseContext = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
      <div>
        COUNT - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  )
}

export default UseReducerUseContext;