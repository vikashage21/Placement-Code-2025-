import React from 'react'
import { useState } from "react"


// creating  grandchild

const GrandChild = (props) => {
  return (
    <div>
      <h3>
        grandchild:</h3>
      <Child brand={props.brand} />
    </div>
  )
}

// creating a child

const Child = (props) => {

  return (
    <div>
      <h2> child: {props.brand} </h2>
    </div>
  )
}

function App() {
  const [brand, setBrand] = useState('apple')
  return (
    <div>
      <Child brand={brand} />
      <GrandChild brand={brand}/>

    </div>
  )
}

export default App
