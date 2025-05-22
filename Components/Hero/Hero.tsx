import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='pt-28 pb-20 w-[80%] mx-auto'>
        <div>
            <h1 className='text-center text-lg font-medium'>Mammoth Enterprice Browser</h1>
            <h1 className='text-4xl font-black pt-4  text-black  text-center '>Secure work <span className='text-indigo-800'>from any device - </span> <br />no MDM required </h1>
        </div>
        <div className=' grid grid-1 lg:flex justify-center gap-3 pt-16'>
            <button className='px-4 rounded-lg py-3 border-1 font-semibold'>
                Enterprice Browser
            </button>
            <button className='px-4 rounded-lg py-3 border-1 font-semibold'>
                GenAi Data Protection
            </button>
            <button className='px-4 rounded-lg py-3 border-1 font-semibold'>
                Mobile Enterprice Browser
            </button>
        </div>
        <div className='pt-12'>
            <Image src="/images/boy.png" alt='' height={1400} width={1400} />
        </div>
    </div>
  )
}

export default Hero
