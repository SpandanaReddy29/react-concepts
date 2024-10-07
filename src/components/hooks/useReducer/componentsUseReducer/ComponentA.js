import React, {useContext} from 'react';
import { CountContext } from '../UseReducerUseContext';

const ComponentA = () => {

  const countContext = useContext(CountContext);

  return (
    <div>
      Component A - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>INCREMENT</button>
      <button onClick={() => countContext.countDispatch('decrement')}>DECREMENT</button>
      <button onClick={() => countContext.countDispatch('reset')}>RESET</button>
    </div>
  )
}

export default ComponentA