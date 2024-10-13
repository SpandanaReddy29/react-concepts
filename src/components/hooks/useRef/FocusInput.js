import React, {useEffect, useRef} from 'react';

//The useRef Hook creates a mutable reference that persist across renders without causeing re-rendering.
//It returns mutable object with a .current property.
//It can be used to access a DOM element directly or managing focus, caching values to avoid re-initialization on re-renders

const FocusInput = () => {

  const inputRef = useRef(null);

  useEffect(() => {
    //Focus input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default FocusInput