import React from 'react'

const OptionalChaining = () => {

  let user = {
    name: 'Ushika',
    address : {
      city: 'hyderabad'
    }
  }

  const normalFunction = user && user.address && user.address.city;
  const optionalChaining = user?.address?.city

  return (
    <div>
      <p>
        Normal Operator: {normalFunction}
      </p>
      <p>
        Optional Chaining: {optionalChaining}
      </p>
    </div>
  )
}

export default OptionalChaining