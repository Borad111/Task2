import Image from 'next/image'
import React from 'react'

function Service() {
  return (
    <div className='py-20 bg-black '>
      <div className='w-[80%] mx-auto'> 
        <h1 className='text-white font-bold text-center text-4xl'>Securing workforces across industries</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-16'>
        <div className='relative'>
            <Image src="/images/n1.jpg" className='rounded-2xl border border-white shadow-2xl shadow-white' alt='' height={300} width={300} />
            <button className='absolute right-28 border  border-white px-2 py-2 rounded-lg bottom-6 text-white '>
                Menufacture
            </button>
        </div>
        <div className='relative'>
            <Image src="/images/n2.jpg" className='rounded-2xl border border-white shadow-2xl shadow-white' alt='' height={300} width={300} />
            <button className='absolute right-28 border  border-white px-2 py-2 rounded-lg bottom-6 text-white '>
                Finance
            </button>
        </div>
        <div className='relative'>
            <Image src="/images/n3.jpg" className='rounded-2xl border border-white shadow-2xl shadow-white' alt='' height={300} width={300} />
            <button className='absolute right-28 border  border-white px-2 py-2 rounded-lg bottom-6 text-white '>
                Helthcare
            </button>
        </div>
        
      </div>
      </div>

    </div>
  )
}

export default Service
