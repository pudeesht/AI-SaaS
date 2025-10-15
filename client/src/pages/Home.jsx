import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import AiTools from '../components/AiTools'
import Plans from '../components/plans'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default Home