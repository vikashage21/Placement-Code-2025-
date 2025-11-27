import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Navbar from  '../components/Navbar'
const Home = () => {
  return (
    <div className=" w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <Navbar/>

      <div>
      <HeroSection /> 

      </div>
      {/* <Header/>*/}

      
    </div>
  )
}

export default Home
