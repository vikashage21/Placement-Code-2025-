import React, { act, useReducer } from 'react'

function App() {
  // creating a counter app with help of useReducer

  const reducer =(state, action)=>{
    if(action.type == "INCREMENT"){
     return state +1;
    }else if(action.type == "DECREMENT"){
      return state -1;
      
    }

  }

  const [count , dispatch] = useReducer(reducer , 0)
  return (
    <div className='container'>

      {
        count
      }

      <button className='btn' onClick={()=> dispatch( {type :"DECREMENT" })}>decrement</button>
      <button className='btn' onClick={()=> dispatch({type :"INCREMENT" })}>increment</button>
      
    </div>
  )
}

export default App
