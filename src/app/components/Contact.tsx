
import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen w-full md:w-screen bg-black px-4 md:px-14'>
      
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white font-bold text-3xl'>CONTACT</h1>
        <h1 className='text-purple-600 font-bold text-3xl'>ME!</h1>
      </div>
      
      <div className='flex justify-center w-full'>
        <form className='w-full md:mx-7 my-8'>
          
          <div className='md:flex gap-12 justify-center'>
            <input
              type='text'
              placeholder='ENTER YOUR NAME'
              className='border my-8 border-purple-600 py-6 px-14 rounded-xl w-full md:w-auto'
            />
            <input
              type="email"
              placeholder='ENTER YOUR EMAIL'
              className='border border-purple-600 py-6 px-14 my-8 rounded-xl w-full md:w-auto'
            />
          </div>
          
          <div className='md:flex gap-12 justify-center'>
            <input
              type="number"
              placeholder='ENTER PHONE NUMBER'
              className='border my-8 border-purple-600 py-6 px-14 rounded-xl w-full md:w-auto'
            />
            <input
              type="number"
              placeholder='ENTER ID NO'
              className='border my-8 border-purple-600 py-6 px-14 rounded-xl w-full md:w-auto'
            />
          </div>
          
          <div className='flex justify-center'>
            <button className='px-8 py-4 border border-purple-600 hover:bg-purple-800 bg-purple-600 text-white font-semibold text-2xl rounded-md'>
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
