"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type MenuItem = 'home' | 'about me' | 'skills' | 'works';

export default function Header() {
  const [clickedMenu, setClickedMenu] = useState<MenuItem>('home');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMenuClick = (menu: MenuItem) => {
    setClickedMenu(menu);

    const scrollPositions: Record<MenuItem, number> = {
      home: 0,
      'about me': 2780,
      skills: 1580,
      works: 600,
    };

    window.scrollTo({ top: scrollPositions[menu], behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed top-0 w-full flex justify-center py-2 gap-8 bg-purple-dark m-auto"
    >
      <button className='flex' onClick={() => handleMenuClick('home')} aria-current={clickedMenu === 'home' ? 'page' : undefined}>
        <p className='text-normal-purple'>#</p>
        <p className={`text-p-gray ${clickedMenu === 'home' ? 'text-white' : ''}`}>home</p>
      </button>

      <button className='flex' onClick={() => handleMenuClick('works')} aria-current={clickedMenu === 'works' ? 'page' : undefined}>
        <p className='text-normal-purple'>#</p>
        <p className={`text-p-gray ${clickedMenu === 'works' ? 'text-white' : ''}`}>works</p>
      </button>

      <button className='flex' onClick={() => handleMenuClick('skills')} aria-current={clickedMenu === 'skills' ? 'page' : undefined}>
        <p className='text-normal-purple'>#</p>
        <p className={`text-p-gray ${clickedMenu === 'skills' ? 'text-white' : ''}`}>skills</p>
      </button>

      <button className='flex' onClick={() => handleMenuClick('about me')} aria-current={clickedMenu === 'about me' ? 'page' : undefined}>
        <p className='text-normal-purple'>#</p>
        <p className={`text-p-gray ${clickedMenu === 'about me' ? 'text-white' : ''}`}>about me</p>
      </button>
    </motion.nav>
  );
}
