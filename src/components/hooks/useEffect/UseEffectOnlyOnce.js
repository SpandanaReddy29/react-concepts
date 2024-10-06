import React, {useState, useEffect} from 'react';

const UseEffectOnlyOnce = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse Evenet');
    setX(e.clientX);
    setY(e.clientY)
  }

  // useEffect(() => {
  //   console.log("UseEffect called");
  //   window.addEventListener('mousemove', logMousePosition)
  // }, []); //renders only once, doesnt have any dependency

  useEffect(() => {
    console.log("UseEffect called");
    window.addEventListener('mousemove', logMousePosition)

    //to mount the component
    return () => {
      console.log("Component Unmount Code");
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, []); //renders only once, doesnt have any dependency

  return (
    <div>
      X Co-ordinate: {x}
      Y Co-ordinate: {y}
    </div>
  )
}

export default UseEffectOnlyOnce