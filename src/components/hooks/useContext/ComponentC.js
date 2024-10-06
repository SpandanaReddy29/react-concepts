import React from 'react';
import ComponentE from './ComponentE';
import ComponentF from './ComponentF';

const ComponentC = () => {
  return (
    <div>
      <ComponentE/>
      <h1> UseContext Hook
        <ComponentF/>
      </h1>
    </div>
  )
}

export default ComponentC