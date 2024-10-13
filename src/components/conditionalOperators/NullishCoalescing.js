import React from 'react'

const NullishCoalescing = () => {

  let userInput = null;
  let defaultValue = "Hi, I am default value";

  const normalFunction = userInput ? userInput : defaultValue;
  const nullishCoalescing = userInput ?? defaultValue;

  return (
    <div>
      <p>
        Normal Operator: {normalFunction}
      </p>
      <p>
        Nullish Coalescing: {nullishCoalescing}
      </p>
    </div>
  )
}

export default NullishCoalescing