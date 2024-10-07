import React, {useContext} from 'react';
import { CountContext } from '../UseReducerUseContext';

const ComponentF = () => {

  const countContext = useContext(CountContext);

  return (
    <div>
      Component F - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>INCREMENT</button>
      <button onClick={() => countContext.countDispatch('decrement')}>DECREMENT</button>
      <button onClick={() => countContext.countDispatch('reset')}>RESET</button>
    </div>
  )
}

export default ComponentF