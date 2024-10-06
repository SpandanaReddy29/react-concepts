import React from "react";

// function FunctionalGreet() {
//   return <h1>Hello Spandana</h1>
// };

const FunctionalGreet = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h1>{props.children}</h1>
    </div>
  )
}

export default FunctionalGreet;