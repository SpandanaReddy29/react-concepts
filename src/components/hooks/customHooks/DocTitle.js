import React, {useState, useEffect} from 'react';
import useDocumentTitle from './useDocumentTitle';

function DocTitle() {

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count ${count}`
  // }, [count]);

  useDocumentTitle(count);

  const onButtonClick = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <button onClick={onButtonClick}> Count - {count} </button>
    </div>
  )
}

export default DocTitle