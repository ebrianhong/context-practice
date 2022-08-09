import React, { useReducer } from 'react'
import Child from './Child';

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Parent = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div id="Parent">
      <p>Parent's age: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decremnent</button>
      <Child />
      {children}
    </div>
  )
}

export default Parent