
import React from 'react';

const Contact = () => {
  return (
    <div className='min-h-screen w-full md:w-screen bg-black px-4 md:px-14'>
      
      <div className="py-4 flex justify-center gap-4">
        <h1 className='text-white tracking-tighter leading-[20px] text-4xl font-light '>CONTACT</h1>
        <h1 className='text-purple-600 tracking-tighter leading-[20px] text-4xl font-light '>ME!</h1>
      </div>
      
      <div className='flex justify-center w-full'>
        <form className='w-full md:mx-7 my-8' action="https://formspree.io/f/xanybpov" method='POST'>
          
          <div className='md:flex gap-12 justify-center'>
            <input
              type='text'
              placeholder='ENTER YOUR NAME' autoComplete='off' required name='name'
              className='border my-8 border-purple-600 py-6 px-14  w-full md:w-auto  text-purple-900  tracking-tighter leading-[20px] text-2xl font-light '
            />
            <input
              type="email"
              placeholder='ENTER YOUR EMAIL'  autoComplete='off' required name='emaile'
              className='border border-purple-600 py-6 px-14 my-8  w-full md:w-auto  text-purple-900  tracking-tighter leading-[20px] text-2xl font-light '
            />
          </div>
          
          <div className='md:flex gap-12 justify-center'>
            <input
              type="number"
              placeholder='ENTER PHONE NUMBER' autoComplete='off' required name='phone number'
              className='border my-8 border-purple-600 py-6 px-14  w-full md:w-auto  text-purple-900  tracking-tighter leading-[20px] text-2xl font-light '
            />
            <input
              type="number"
              placeholder='ENTER ID NO'  autoComplete='off' required name='idnumber'
              className='border my-8 border-purple-600 py-6 px-14  w-full md:w-auto  text-purple-900  tracking-tighter leading-[20px] text-2xl font-light '
            />
          </div>
         
         <div className='flex justify-center items-center mb-12'>
        
        
            
            <input type="text" placeholder='ENTER YOUR MESSAGE' name='message'
              autoComplete='off' required
             className='h-[100px] w-[630px] text-purple-900  tracking-tighter leading-[20px] text-2xl font-light  '></input>
          
          
         </div>
          
          <div className='flex justify-center'>
            <button type='submit' className='px-8 py-4 border border-purple-600 hover:bg-purple-800 bg-purple-600 text-white tracking-tighter leading-[20px] text-2xl font-light  '>
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
