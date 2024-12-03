"use client"
import React from 'react';
import { useRef } from 'react';


const Interest = () => {
  const partone=useRef<HTMLInputElement>(null)
  const parttwo=useRef<HTMLInputElement>(null)
  const partthree=useRef<HTMLInputElement>(null)
  const partfour=useRef<HTMLInputElement>(null)
  const partfive=useRef<HTMLInputElement>(null)
  const partsix=useRef<HTMLInputElement>(null)
  const partseven=useRef<HTMLInputElement>(null)
  const tellme=()=>{
    const values=partone.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  const tellme2=()=>{
    const values=parttwo.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  const tellme3=()=>{
    const values=partthree.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  const tellme4=()=>{
    const values=partfour.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  const tellme5=()=>{
    const values=partfive.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  const tellme6=()=>{
    const values=partsix.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }
  const tellme7=()=>{
    const values=partseven.current?.innerText
    const utterence=new SpeechSynthesisUtterance(values)
    speechSynthesis.speak(utterence)
  }


  return (
    <div className='min-h-screen w-screen bg-black px-4 md:px-14'>
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white font-bold text-3xl'>MY</h1>
        <h1 className='text-purple-600 font-bold text-3xl'>SKILLS</h1>
      </div>
      
      <div>
        <h1 className='text-white  m-4 p-4  tracking-tighter leading-[20px] text-4xl font-light'>INTEREST</h1>
        
        <div className='border border-purple-600 p-4 grid gap-4'>
          <div className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'
          ref={partone} onClick={tellme} >
            With a deep understanding of Next.js, I develop performant web applications using server-side rendering and static site generation. My expertise enables faster load times and improved SEO performance.
          </div>
          
          <div ref={parttwo} onClick={tellme2} className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'>
            I specialize in React, building dynamic and interactive user interfaces. My knowledge of state management, hooks, and component-based architecture helps in crafting modular and reusable UI components.
          </div>
          
          <div ref={partthree}  onClick={tellme3} className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'>
            My TypeScript skills allow me to write scalable, maintainable code with static type-checking. This reduces runtime errors and enhances the overall robustness of web applications.
          </div>
          
          <div ref={partfour} onClick={tellme4} className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'>
            Proficient in JavaScript, I handle both client-side and server-side logic efficiently. I utilize modern ES6+ features like async/await, promises, and destructuring to write clean, concise code.
          </div>
          
          <div ref={partfive} onClick={tellme5} className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'>
            Tailwind CSS is my go-to tool for designing responsive, utility-first layouts. I streamline styling processes, creating fast, accessible websites without having to write custom CSS from scratch.
          </div>
          
          <div  ref={partsix} onClick={tellme6} className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'>
            HTML forms the foundation of my web development skills. I follow semantic HTML practices to ensure accessible, SEO-friendly websites that provide a solid structure for rich user experiences.
          </div>
          
          <div ref={partseven} onClick={tellme7} className='border border-purple-600 p-3 text-white  tracking-tighter leading-[20px] text-2xl font-light'>
            With a strong command of CSS, I style websites to ensure they are visually appealing and responsive. My use of Flexbox and Grid enhances layout flexibility across various devices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
