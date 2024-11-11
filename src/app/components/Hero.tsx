
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-fixed bg-no-repeat w-screen bg-black flex">
      <div className="py-36 px-14">
        
        <header>
          <h1 className="font-bold text-3xl py-4 text-white">I am</h1>
          <h1 className="uppercase text-white py-3 text-3xl font-semibold hover:text-purple-600">
            urooba yaseen!
          </h1>
          <h1 className="text-purple-600">UI/UX Designer</h1>
        </header>
        
        <p className="text-white font-serif py-3 max-w-md">
          Skilled web developer with expertise in Next js  React  TypeScript  JavaScript Tailwind CSS  HTML and CSS Focused on building responsive efficient and scalable front-end solutions with modern technologies and clean design principles
        </p>
        
        <div className="flex py-3 gap-6">
          <Link href="mailto:uroobanawal74@gmail.com">
            <button className="bg-purple-600 text-white font-bold px-7 py-4 rounded-md hover:bg-purple-900">
              Hire me
            </button>
          </Link>
          
          <Link href="https://www.linkedin.com/in/urooba-yaseen-48964a2b5/">
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold px-7 py-4 rounded-md border border-purple-600">
              Let s Connect
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
