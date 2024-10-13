//Context provides a way to pass data through the component tree without prop drilling
//Is a way to manage state globally
//It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone
//useContext makes consumption of values easy

import React from 'react';
import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const UseContextHook = () => {
  return (
    <div>
      <UserContext.Provider value={'Ushika'}>
        <ChannelContext.Provider value={'UshikaReddy'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default UseContextHook