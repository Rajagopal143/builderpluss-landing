import {  Menu } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import NavList from './NavList';

const Header = () => {
  return (
    <div className="fixed rounded-xl h-14 xl:w-[70%] w-screen shadow-md xl:mt-12 px-5 flex items-center justify-between bg-white z-10 xl:mx-[15%]">
      <div className="flex items-center justify-center">
        <Image
          width={1000}
          height={1000}
          alt="logo"
          src={"/Untitled design(1).png"}
          className="w-8 rounded-md overflow-hidden bg-black"
        />
        <h1 className="text-2xl font-semibold font-serif ml-2">BuilderPluss</h1>
      </div>
      <NavList />
      <div className="hidden max-md:flex ">
        <Menu />
      </div>
      <span className='hidden xl:flex'></span>
    </div>
  );
}

export default Header
