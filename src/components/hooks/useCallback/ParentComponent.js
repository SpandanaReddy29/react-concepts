import React, {useState, useCallback} from 'react';
import Button from './Button';
import Title from './Title';
import Count from './Count';

//useCallback will return a memomized function a provided callback function returning the memozied version of the function.
//It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

const ParentComponent = () => {

  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(100000);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 50000)
  }, [salary])

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge} >Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary} >Increment Salary</Button>
    </div>
  )
}

export default ParentComponent