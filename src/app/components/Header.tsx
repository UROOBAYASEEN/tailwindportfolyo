
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Header = () => {

  interface hero{
    name:string
    id:string
  }
  const values: hero[] = [{
    name:'home',id:"/"
  }, {
    name:"about",id:"about"
  }, {
    name:"projects",id:"projects"

    
  }, {
    name:"skill",id:"skill"
  }, {
    name:"interest",id:'interest'
  }, {
    name:"contact",id:"contact"
  }];
  const [menu, setMenu] = useState(true);

  return (
    <div className='fixed top-0 left-0 right-0 shadow-xl'>
      <div className='bg-black py-4 flex justify-between lg:justify-evenly px-16'>
        
     
      <div className='uppercase text-white text-2xl font-bold'>urooba.</div>
        
        <div className='hidden md:flex md:gap-5 lg:gap-12'>
          {values.map((val) => (
            <Link href={val.id} key={val.id}> <h1   className='text-white uppercase tracking-tighter leading-[20px] text-2xl font-light  hover:text-purple-600 hover:border-b-2 border-purple-600 duration-[3] ease-linear' key={val.id}>
                {val.name}
              </h1></Link>
          
          
          ))}
        </div>

        <div onClick={() => setMenu(!menu)} className='bg-purple-400 p-3 px-4 border md:hidden border-white'>
          {menu ? (
            <TiThMenu />
          ) : (
            <div>
              <ImCross />
              <div className='bg-black text-white h-full fixed left-0 top-0 duration-500 w-1/2'>
                <div className='py-12 px-12'>
                  {values.map((val) => (
                    <div key={val.id} className='py-2'>
                      <Link href={`#${val.id}`}

                      className='tracking-tighter leading-[20px] text-2xl font-light  hover:bg-purple-900'>
                        {val.name}
                      </Link>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
