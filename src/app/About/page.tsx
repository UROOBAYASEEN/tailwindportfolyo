
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen w-screen bg-black flex flex-col items-center px-4 md:px-14'>
      
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white font-bold text-3xl'>About</h1>
        <h1 className='text-purple-600 font-bold text-3xl'>me</h1>
      </div>
      
      <div className='py-4 bg-white rounded-full my-5 w-[150px] h-[150px] border border-white'></div>

      <div className="py-4 text-center text-white text-xl">
        UI UX DESIGNER
      </div>

      <div className="py-4 sm:py-6 px-8 sm:px-16 lg:px-24 font-semibold h-auto text-center text-purple-600">
        <p className="text-sm sm:text-base lg:text-lg">
          Skilled web developer with expertise in Next js React TypeScript JavaScript Tailwind CSS HTML and CSS Focused on building responsive efficient and scalable front end solutions with modern technologies and clean design principles.
        </p>
      </div>
    </div>
  )
}

export default About
