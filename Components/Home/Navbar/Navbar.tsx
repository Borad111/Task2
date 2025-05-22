import { navlink } from '@/Constant/constant'
import Link from 'next/link'
import React from 'react'
import { GiElephant } from 'react-icons/gi'
import { RiMenuUnfold4Line } from 'react-icons/ri'

type Props={
  OnMenuClick:()=>void;
}
function Navbar({OnMenuClick}:Props) {
  return (
    <div className='bg-white h-[12vh] flex shadow-md'>
      <div className='w-[80%] flex justify-between  items-center mx-auto'>

      {/* logo  */}

        <div className=' hidden lg:flex flex-row  text-center h-[5vh] w-[5vh]'>
          <div>
            <GiElephant className='w-15 h-15 text-indigo-900'/>
          </div>
          <div className='items-center ml-3 hidden sm:block'>
            <h1 className='font-extrabold text-xl text-black'>MAMMOTH</h1>
            <p className='font-bold  text-sm'>-----CYBER-----</p>
          </div>
        </div>

      {/* link  */}
      <div className='hidden lg:flex  items-center pl-20 space-x-10 font-medium'>
        {
          navlink.map((link)=>{
            return <Link className='transition-all pb-1 hover:text-indigo-900  border-b-1 border-transparent  duration-300 hover:border-indigo-900' href={link.label} key={link.id}>
                  {link.label}
                </Link>
          })
        }
      </div>

      {/* button  */}
      <div className='flex gap-2'>
        <div className='pr-2 hidden md:block'>
          <button className='px-4 py-2 border rounded-lg'>
            English
          </button>
        </div>
        
        <div>
            <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                  <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Schedule Demo
              </span>
          </a>
        </div>
      
      </div>
      <div className='block lg:hidden'>
        <button onClick={OnMenuClick}>
            <RiMenuUnfold4Line className='w-6 h-6' />
        </button>

      </div>
      </div>
      
    </div>
  )
}

export default Navbar
