"use client"
import React, { useState } from 'react'

export default function Header() {
  const [cklickedMenu, seClickedMenu] = useState('home');

  const handleMenuClick = (e: string) => {
    seClickedMenu(e);
  }
  return (
    <nav className='fixed top-0 w-full flex justify-center pt-6 gap-8 max-w-6xl m-auto'>

        <button className=' flex' onClick={() => handleMenuClick('home')}>
            <p className=' text-normal-purple'>#</p>
            <p className={`text-p-gray  ${cklickedMenu === 'home' && 'text-white'}`}>home</p>
        </button>

        <button className=' flex' onClick={() => handleMenuClick('works')}>
            <p className=' text-normal-purple'>#</p>
            <p className={`text-p-gray  ${cklickedMenu === 'works' && 'text-white'}`}>works</p>
        </button>

        <button className=' flex' onClick={() => handleMenuClick('about me')}>
            <p className=' text-normal-purple'>#</p>
            <p className={`text-p-gray  ${cklickedMenu === 'about me' && 'text-white'}`}>about me</p>
        </button>

        <button className=' flex' onClick={() => handleMenuClick('contacts')}>
            <p className=' text-normal-purple'>#</p>
            <p className={`text-p-gray  ${cklickedMenu === 'contacts' && 'text-white'}`}>contacts</p>
        </button>

    </nav>
  )
}
