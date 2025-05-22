import { navlink } from '@/Constant/constant'
import Link from 'next/link'
import React from 'react'
import { GiElephant } from 'react-icons/gi'
import { SiVexxhost } from 'react-icons/si'
import { TbXboxXFilled } from 'react-icons/tb'

type Props={
  OnClose:()=>void;
}

function MobileNav({OnClose}:Props) {
  return (
    <div className='h-screen bg-indigo-900 '>
      <div className='w-[80%] mx-auto'>

      {/* logo and cencal button  */}
        <div className='flex justify-between pt-8'>
          <div className=''>
            <GiElephant className='w-12 h-12 shadow-2xl shadow-white text-white'/>
          </div>
          <div> 
            <button onClick={OnClose}>
            <TbXboxXFilled className='w-10 h-10 shadow-2xl shadow-white text-white' />

            </button>
          </div>
        </div>

      {/* link  */}

        <div className='h-screen bg-indigo-900 items-center py-12 text-white flex flex-col gap-12 text-lg font-semibold'>
          {navlink.map((link)=>{
            return <Link href={link.label}>{link.label}</Link>
          })}
        </div>
      </div>

    </div>
    
  )
}

export default MobileNav
