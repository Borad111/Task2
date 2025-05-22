"use client"
import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';

function Responsive() {
    const [showNav,SetShow]=useState(false);

   
  return (
    <div>
      <Navbar OnMenuClick={()=>SetShow(true)}/>
      <div className={`fixed top-0 right-0 z-50 h-screen w-[93%] bg-indigo-900 transform transition-transform duration-500 ease-in-out ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
        <MobileNav OnClose={() => SetShow(false)} />
      </div>
    </div>
  )
}

export default Responsive
