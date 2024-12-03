
import React from 'react';

const Skill = () => {
  return (
    <div className='min-h-screen w-screen bg-black px-4 md:px-14'>
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white tracking-tighter leading-[20px] text-3xl font-light '>MY</h1>
        <h1 className='text-purple-600 tracking-tighter leading-[20px] text-3xl font-light '>SKILLS</h1>
      </div>

      <div className='grid md:grid-cols-2 gap-8 py-12'>
        {/* Coding Skills Section */}
        <div>
          <h1 className='text-white tracking-tighter leading-[20px] text-2xl font-light  mb-4 border-b-2 border p-3'>CODING SKILLS</h1>
          <div className='space-y-6'>
            <div>
              <h1 className='text-white  mb-2 tracking-tighter leading-[20px] text-2xl font-light '>HTML</h1>
           
           <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[80%]'></div></div>
            </div>
            <div>
              <h1 className='text-white  mb-2 tracking-tighter leading-[20px] text-2xl font-light '>CSS</h1>
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[75%]'></div></div>
             
            </div>
            <div>
              <h1 className='text-white  mb-2 tracking-tighter leading-[20px] text-2xl font-light '>TAILWIND CSS</h1>
            
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[95%]'></div></div>
            </div>
            <div>
              <h1 className='text-white 
              tracking-tighter leading-[20px] text-2xl font-light  mb-2 
              '>TYPESCRIPT</h1>
            
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[90%]'></div></div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div>
          <h1 className='text-white tracking-tighter leading-[20px] text-3xl font-light  mb-4 uppercase border-b-2 border p-3'>PROFESSIONAL SKILLS</h1>
          <div className='space-y-6'>
            <div>
              <h1 className='text-white tracking-tighter leading-[20px] text-2xl font-light  mb-2 '>ASSISTANT MANAGER</h1>
            
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[80%]'></div></div>
            </div>
            <div>
              <h1 className='text-white  mb-2 tracking-tighter leading-[20px] text-2xl font-light '>DIALYSIS TECHNICIAN</h1>
            
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[75%]'></div></div>
            </div>
            <div>
              <h1 className='text-white mb-2 tracking-tighter leading-[20px] text-2xl font-light  '>SPEAKER</h1>
           
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[85%]'></div></div>
            </div>
            <div>
              <h1 className='text-white  mb-2  tracking-tighter leading-[20px] text-2xl font-light '>DESIGNER</h1>
             
              <div className='border border-b-2'>   <div className='bg-purple-600 h-2 w-[70%]'></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
