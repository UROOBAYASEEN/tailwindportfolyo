import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Interrest from './components/Interrest'
import Contact from './components/Contact'






const page = () => {
  return (
    <div className='w-screen h-screen'>
    
    
    
    

     <Hero />
    <About/>
      <Interrest/>
      <Skill/>
      <Contact/>
    
 
 
    </div>
  )
}

export default page
