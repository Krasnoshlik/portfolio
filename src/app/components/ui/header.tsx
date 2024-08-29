"use client";
import React, { useState } from 'react';

export default function Header() {
  const [clickedMenu, setClickedMenu] = useState('home');


  const handleMenuClick = (menu: string) => {
    setClickedMenu(menu);

    switch(menu) {
      case 'home': 
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about me' :
        window.scrollTo({ top: 2780, behavior: 'smooth' });
        break;
      case 'skills' :
        window.scrollTo({ top: 1580, behavior: 'smooth' });
        break;  
      case 'works' :
        window.scrollTo({ top: 600, behavior: 'smooth' });
        break;  
    }
  };

  return (
      <nav className='fixed top-0 w-full flex justify-center py-2 gap-8 bg-purple-dark m-auto'>
        <button className='flex' onClick={() => handleMenuClick('home')}>
          <p className='text-normal-purple'>#</p>
          <p className={`text-p-gray ${clickedMenu === 'home' ? 'text-white' : ''}`}>home</p>
        </button>

        <button className='flex' onClick={() => handleMenuClick('works')}>
          <p className='text-normal-purple'>#</p>
          <p className={`text-p-gray ${clickedMenu === 'works' ? 'text-white' : ''}`}>works</p>
        </button>

        <button className='flex' onClick={() => handleMenuClick('skills')}>
          <p className='text-normal-purple'>#</p>
          <p className={`text-p-gray ${clickedMenu === 'skills' ? 'text-white' : ''}`}>skills</p>
        </button>

        <button className='flex' onClick={() => handleMenuClick('about me')}>
          <p className='text-normal-purple'>#</p>
          <p className={`text-p-gray ${clickedMenu === 'about me' ? 'text-white' : ''}`}>about me</p>
        </button>
      </nav>
  );
}
