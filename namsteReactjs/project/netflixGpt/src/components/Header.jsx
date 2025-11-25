import React from 'react'
import { netflixLogo } from '../constant/const'

const Header = () => {
  return (
    <div className='absolute w-44 px-2 mx-5 py-2 z-10  bg-gradient-to-b  '>
        <img src={netflixLogo} alt="logo" />
      
    </div>
  )
}

export default Header
