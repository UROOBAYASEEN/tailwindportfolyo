
import React from 'react';

const Skill = () => {
  return (
    <div className='min-h-screen w-screen bg-black px-4 md:px-14'>
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white font-bold text-3xl'>MY</h1>
        <h1 className='text-purple-600 font-bold text-3xl'>SKILLS</h1>
      </div>

      <div className='grid md:grid-cols-2 gap-8 py-12'>
        {/* Coding Skills Section */}
        <div>
          <h1 className='text-white font-bold text-2xl mb-4'>CODING SKILLS</h1>
          <div className='space-y-6'>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>HTML</h1>
              <div className='bg-purple-600 h-2 w-[80%]'></div>
            </div>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>CSS</h1>
              <div className='bg-purple-600 h-2 w-[75%]'></div>
            </div>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>TAILWIND CSS</h1>
              <div className='bg-purple-600 h-2 w-[95%]'></div>
            </div>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>TYPESCRIPT</h1>
              <div className='bg-purple-600 h-2 w-[90%]'></div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div>
          <h1 className='text-white font-bold text-2xl mb-4 uppercase'>PROFESSIONAL SKILLS</h1>
          <div className='space-y-6'>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>ASSISTANT MANAGER</h1>
              <div className='bg-purple-600 h-2 w-[80%]'></div>
            </div>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>DIALYSIS TECHNICIAN</h1>
              <div className='bg-purple-600 h-2 w-[75%]'></div>
            </div>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>SPEAKER</h1>
              <div className='bg-purple-600 h-2 w-[95%]'></div>
            </div>
            <div>
              <h1 className='text-white font-bold mb-2 text-2xl'>DESIGNER</h1>
              <div className='bg-purple-600 h-2 w-[90%]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
