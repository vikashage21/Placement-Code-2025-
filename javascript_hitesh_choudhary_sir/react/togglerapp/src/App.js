import React from 'react'
import { useState } from 'react'
import ThemeContext from './context/context.js'
import Header from './Component/Header.js'
import HeroSection from './Component/Herosection.js'
function App() {
  const theme = useState('light')
  return (
    <div>
      <ThemeContext.Provider
        value={theme}>
        <Header />
        <HeroSection />
      </ThemeContext.Provider>

    </div>
  )
}

export default App
