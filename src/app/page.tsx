import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Interrest from './components/Interrest'
import Contact from './components/Contact'
import Footer from './components/Footer'




const page = () => {
  return (
    <div className='w-screen h-screen'>
     <Hero />
     
     
      <Interrest/>
      <Skill/>
    <About/>
     
     
      <Contact/>
    
    <Footer/>
    </div>
  )
}

export default page
