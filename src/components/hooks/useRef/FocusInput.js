import React, {useEffect, useRef} from 'react';


//The useRef Hook allows you to persist values between renders.
//It can be used to store a mutable value that does not cause a re-render when updated.
//It can be used to access a DOM element directly

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