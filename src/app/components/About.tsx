"use client"

import Image from 'next/image'
import React ,{useRef} from 'react'

const About = () => {

  const myref=useRef<HTMLInputElement>(null)
  const hythere=useRef<HTMLInputElement>(null)
  const tellmetwo=()=>{
    const values=hythere.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
   const tellme=()=>{
    const values=myref.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  return (
    <div className='bg-black text-white pb-24 w-full' id='about'>
      <div className='lg:flex  gap-16 items-center md:ml-24 '>

<div>
  <Image
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjePWa--nmlMnCvzbQ__LV1SnA7rnqGbK8kg&s"
  alt='thisismyportfolyoiamge'
  className='h-[200px] bg-cover w-[700px] bg-center bg-no-repeat object-cover mb-10'
  height={100}
  width={100}
  />
</div>
<div className='mx-5'>
  <h1 className='uppercase text-white  tracking-tighter leading-[30px] text-4xl font-light mb-5'>hi there!</h1>
  <p className='text-white   tracking-tighter leading-[20px] text-2xl font-light md:w-[50%]' ref={hythere} onClick={tellmetwo}>
 
  I am a passionate full-stack developer specializing in turning Figma designs into fully functional  high-performance Next.js applications. With expertise in React, TypeScript, JavaScript, and Tailwind CSS  I create responsive  visually appealing and user-friendly web solutions  My experience spans crafting seamless user interfaces and developing robust back-end systems to deliver end-to-end solutions that meet client needs. I take pride in attention to detail, ensuring pixel-perfect implementation and optimizing performance for an exceptional user experience. Let s bring creative ideas to life through code!

  </p>
</div>

      </div>
      <div className='md:flex mt-32  justify-center  items-center gap-10 mx-3 overflow-x-hidden'>
        <div>
          <h1 className='uppercase  tracking-tighter leading-[20px] text-4xl font-light  '> my career so  far</h1>
          <p className=' md:w-[50%] mt-10 tracking-tighter leading-[20px] text-2xl font-light mb-10 w-[100%]' ref={myref} onClick={tellme}>My IT career began at Governor House, where I took my first steps into the world of programming. This experience laid a strong foundation as I explored various programming languages, igniting my passion for technology and software development. It was during this time that I developed a keen interest in creating innovative solutions, which has since evolved into a fulfilling journey as a full-stack developer. From learning the basics to mastering modern frameworks like Next.js and React, my early start at Governor House continues to inspire my work today.</p>

        </div>
        <div className=''>
          <div className='flex justify-evenly gap-10 mb-4 '>

            <p className= 'bg-purple-700    text-whitetracking-tighter leading-[20px] text-2xl font-light px-4 py-2 uppercase'>react</p>
            <p className='bg-purple-700 text-whitetracking-tighter leading-[20px] text-2xl font-light px-4 py-2 uppercase'>next js</p>
       
          </div>
          <div className='flex justify-evenly gap-10 mb-4 '>
          <p className='bg-purple-700 text-whitetracking-tighter leading-[20px] text-2xl font-light px-4 py-2 uppercase'>typescript</p>
            <p className='bg-purple-700 text-whitetracking-tighter leading-[20px] text-2xl font-light px-4 py-2 uppercase'>Tailwind css</p>
       
          </div>
          <div className='flex justify-evenly gap-10 mb-4 '>
          <p className='bg-purple-700 text-whitetracking-tighter leading-[20px] text-2xl font-light px-4 py-2 uppercase'>javacript</p>
            <p className='bg-purple-700 text-whitetracking-tighter leading-[20px] text-2xl font-light px-4 py-2 uppercase'>html</p>
       
          </div>
        
        

        </div>
        <div></div>


      </div>


    </div>
  )
}

export default About







































// import React from 'react';

// const About = () => {
//   return (
//     <div className='min-h-screen w-screen bg-black flex flex-col items-center px-4 md:px-14 overflow-hidden'>
      
//       <div className="py-4 flex justify-center gap-4">
//         <h1 className='text-white font-bold text-3xl'>About</h1>
//         <h1 className='text-purple-600 font-bold text-3xl'>me</h1>
//       </div>
      
//       <div className='py-4 bg-cover bg-center bg-no-repeat rounded-full my-5 w-[150px] h-[150px] border border-white' 
//            style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dQjiKxDO6YrY5GSYHw8NLWHJp9DLrjgntQ&s")` }}>
//       </div>

//       <div className="py-4 text-center text-white text-xl">
//         UI UX DESIGNER
//       </div>

//       <div className="py-4 sm:py-6 px-8 sm:px-16 lg:px-24 font-semibold h-auto text-center text-purple-600">
//         <p className="text-sm sm:text-base lg:text-lg">
//           Skilled web developer with expertise in Next js React TypeScript JavaScript  Tailwind CSS  HTML and CSS Focused on building responsive efficient and scalable front-end solutions with modern technologies and clean design principles
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
