import Image from 'next/image'
import React from 'react'

function Service() {
  return (
    <div className='py-20 bg-black  text-white'>
      <div className='w-[80%] mx-auto'> 
        <h1 className='text-white font-bold text-center text-4xl'>Securing workforces across industries</h1>
        <div className='   grid grid-cols-1 md:grid-cols-2 lg:flex  lg:justify-between gap-3 pt-16'>
          <div className='relative'>
              <Image src="/images/n1.jpg" className='rounded-2xl border border-white shadow-2xl shadow-white' alt='' height={300} width={300} />
              <button className='absolute right-40 border  border-white px-2 py-2 rounded-lg bottom-6 text-white '>
                  Menufacture
              </button>
          </div>
          <div className='relative'>
              <Image src="/images/n2.jpg" className='rounded-2xl border border-white shadow-2xl shadow-white' alt='' height={300} width={300} />
              <button className='absolute right-40 border  border-white px-2 py-2 rounded-lg bottom-6 text-white '>
                  Finance
              </button>
          </div>
          <div className='relative'>
              <Image src="/images/n3.jpg" className='rounded-2xl border border-white shadow-2xl shadow-white' alt='' height={300} width={300} />
              <button className='absolute right-40 border  border-white px-2 py-2 rounded-lg bottom-6 text-white '>
                  Helthcare
              </button>
          </div>
        </div>
        <div className='py-10 bg-indigo-700 mt-20 rounded-lg '>
          <div className=' grid grid-cols-1 items-center lg:grid-cols-2 gap-8 px-10'>
              <div className=''>
                <h1 className='text-white font-bold text-2xl'>"The best thing about the Mammonth Cyber solution <br /> is that it is so seamless for our remote employee "</h1>
                <div className='pt-8 leading '>
                  <h1 className='font-bold'>Vice President, It Security Officer </h1>
                  <h1>National Bank with HQ in the Midwest </h1>
                </div>
                <h1 className='font-bold pt-10 '>Read case study ? </h1>
              </div>
              <div>
                  <Image src="/images/lap3.jpeg" alt='' className='rounded-lg' width={600} height={600} />
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service
