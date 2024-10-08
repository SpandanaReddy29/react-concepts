import React, {useState, useEffect, useRef} from 'react';


//useRef Stors previous state on re-renders
const Timer = () => {

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)} >Clear Timer</button>
    </div>
  )
}

export default Timer;