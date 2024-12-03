"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const Hero = () => {

  const aboutmyself="I am   urooba yaseen! UI UX Designer and fullstack develper"
  const para=" Skilled web developer with expertise in Next js  React  TypeScript  JavaScript Tailwind CSS  HTML and CSS Focused on building responsive efficient and scalable front-end solutions with modern technologies and clean design principles "

  const Speaknow=()=>{
    const utarrance=new SpeechSynthesisUtterance(aboutmyself)
    speechSynthesis.speak(utarrance)
    
    
  }
  const  paraspeak=()=>{
    const utarrance=new SpeechSynthesisUtterance(para)
    speechSynthesis.speak(utarrance)
    
    
  }

  return (
    <section className="bg-cover bg-fixed bg-no-repeat w-screen bg-black  py-3  md:flex">
      <div className="pt-36 px-14">
        
        <header>
          <h1 className=" py-4 text-white  tracking-tighter leading-[20px] text-4xl font-light" onClick={Speaknow}>I am</h1>
          <h1 className="uppercase text-white py-3  hover:text-purple-600  tracking-tighter leading-[30px] text-4xl font-light" onClick={Speaknow}>
            urooba yaseen!
          </h1>
          <h1 className="text-purple-600  tracking-tighter leading-[20px] text-4xl font-light" onClick={Speaknow}>UI/UX Designer</h1>
        </header>
        
        <p className="text-white  tracking-tighter leading-[20px] text-2xl font-light py-3 max-w-md" onClick={paraspeak}>
          Skilled web developer with expertise in Next js  React  TypeScript  JavaScript Tailwind CSS  HTML and CSS Focused on building responsive efficient and scalable front-end solutions with modern technologies and clean design principles
       
        </p>
        
        <div className="flex py-3 gap-6">
          <Link href="mailto:uroobanawal74@gmail.com">
            <button className="bg-purple-600 text-white  px-7 py-4 rounded-md hover:bg-purple-900 tracking-tighter leading-[20px] text-2xl font-light ">
              Hire me
            </button>
          </Link>
          
          <Link href="https://www.linkedin.com/in/urooba-yaseen-48964a2b5/">
            <button className="bg-black hover:bg-white hover:text-black text-white  px-7 py-4 rounded-md border border-purple-600 tracking-tighter leading-[20px] text-2xl font-light ">
              Let s Connect
            </button>
          </Link>
        </div>
        <div className='flex  mt-4 gap-12  text-white'>

          <div><Link href="https://www.upwork.com/freelancers/~018c0489f7cf90943c"><FaUpwork className='text-3xl hover:text-purple-600 '/></Link></div>
          <div><Link href="https://www.linkedin.com/in/urooba-yaseen-48964a2b5/"><FaLinkedin className='text-3xl hover:text-purple-600'/></Link></div>
          <div><Link href="https://github.com/UROOBAYASEEN">< IoLogoGithub className='text-3xl hover:text-purple-600'/></Link></div>
        </div>
        
      </div>
      <div className='text-white py-36 px-14 '>
        <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_pkotDqbWEcGoV-rKS8jUFY0CHHGKGXHAQ&s"
        height={600}
        width={600}
        alt='portfolyoimage'
        className='bg-center bg-cover bg-no-repeat object-cover '
        
        />
      </div>
    </section>
  );
};

export default Hero;
