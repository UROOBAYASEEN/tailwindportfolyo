
import React from 'react';

const Interest = () => {
  return (
    <div className='min-h-screen w-screen bg-black px-4 md:px-14'>
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white font-bold text-3xl'>MY</h1>
        <h1 className='text-purple-600 font-bold text-3xl'>SKILLS</h1>
      </div>
      
      <div>
        <h1 className='text-white font-bold m-4 p-4 text-2xl'>INTEREST</h1>
        
        <div className='border border-purple-600 p-4 grid gap-4'>
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            With a deep understanding of Next.js, I develop performant web applications using server-side rendering and static site generation. My expertise enables faster load times and improved SEO performance.
          </div>
          
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            I specialize in React, building dynamic and interactive user interfaces. My knowledge of state management, hooks, and component-based architecture helps in crafting modular and reusable UI components.
          </div>
          
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            My TypeScript skills allow me to write scalable, maintainable code with static type-checking. This reduces runtime errors and enhances the overall robustness of web applications.
          </div>
          
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            Proficient in JavaScript, I handle both client-side and server-side logic efficiently. I utilize modern ES6+ features like async/await, promises, and destructuring to write clean, concise code.
          </div>
          
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            Tailwind CSS is my go-to tool for designing responsive, utility-first layouts. I streamline styling processes, creating fast, accessible websites without having to write custom CSS from scratch.
          </div>
          
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            HTML forms the foundation of my web development skills. I follow semantic HTML practices to ensure accessible, SEO-friendly websites that provide a solid structure for rich user experiences.
          </div>
          
          <div className='border border-purple-600 p-3 text-white font-semibold'>
            With a strong command of CSS, I style websites to ensure they are visually appealing and responsive. My use of Flexbox and Grid enhances layout flexibility across various devices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
