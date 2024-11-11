
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Header = () => {
  const values: string[] = ['Home', "About", "Education", "Skill", "Interest", "Contact"];
  const [menu, setMenu] = useState(true);

  return (
    <div className='fixed top-0 left-0 right-0 shadow-xl'>
      <div className='bg-black py-4 flex justify-between lg:justify-evenly px-16'>
        
        <div className='uppercase text-white text-2xl font-bold'>urooba.</div>
        
        <div className='hidden md:flex md:gap-5 lg:gap-12'>
          {values.map((val) => (
              <h1 className='text-white uppercase font-bold hover:text-purple-600' key={val}>
                {val}
              </h1>
          
          
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
                    <div key={val} className='py-2'>
                      <Link href={val === 'Home' ? '/' : `/${val}`} className='font-bold'>
                        {val}
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
