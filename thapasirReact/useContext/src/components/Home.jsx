import React, { useContext } from 'react'
import { BioContext } from '../useContext.jsx'

function Home() {
    const data = useContext(BioContext)
    console.log(data)
  return (
    <div>
        <h1>learning useContext : {data}</h1>
      
    </div>
  )
}

export default Home
