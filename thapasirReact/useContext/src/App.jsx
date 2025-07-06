import React from 'react'
import Home from './components/Home.jsx'
import { BioProvider } from './useContext.jsx'

function App() {
  return (
    <BioProvider>
       <Home/>
    </BioProvider>
   
  )
}

export default App
