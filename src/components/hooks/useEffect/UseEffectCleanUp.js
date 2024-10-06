import React, {useState} from 'react'
import UseEffectOnlyOnce from './UseEffectOnlyOnce';

const UseEffectCleanUp = () => {

  const [display, setDisplay] = useState(true);

  const onButtonClick = () => {
    setDisplay(!display)
  };

  return (
    <div>
      <button onClick={onButtonClick}>Toggle Display</button>
      {display && <UseEffectOnlyOnce />}
    </div>
  )
}

export default UseEffectCleanUp