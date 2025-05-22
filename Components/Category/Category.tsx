import Image from 'next/image'
import React from 'react'

function Category() {
  return (
    <div className='py-20 w-[80%] mx-auto'>
      <div className='text-center'>
        <h1 className='font-medium text-lg'> Enterprice Browser</h1>
        <h1 className='pt-6 font-black text-4xl'>A Browser bulit for <br /> control and compliance</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-6 pt-16'>
        {/* 1st card  */}
        <div className=' py-12 rounded-3xl px-12 bg-sky-100'>
            <div >
                <h1 className='font-bold text-2xl'>App access control</h1>
                <p className='text-sm pt-5'>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum corporis voluptatum iste dolores veritatis distinctio eligendi inventore omnis quae aliquam? ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam? Accusantium reprehenderit aliquid est excepturi.</p>
            </div>
            <div className='pt-5 '>
                <Image src="/images/g2.jpg" alt='' className='rounded-2xl'  height={600} width={600} />
            </div>
        </div>
        <div className=' py-12 rounded-3xl px-12 bg-sky-100'>
            <div >
                <h1 className='font-bold text-2xl'>App access control</h1>
                <p className='text-sm pt-5'>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum corporis voluptatum iste dolores veritatis distinctio eligendi inventore omnis quae aliquam? ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam? Accusantium reprehenderit aliquid est excepturi.</p>
            </div>
            <div className='pt-5 '>
                <Image src="/images/g.jpg" alt='' className='rounded-2xl'  height={600} width={600} />
            </div>
        </div>
        <div className=' py-12 rounded-3xl px-12 bg-sky-100'>
            <div >
                <h1 className='font-bold text-2xl'>App access control</h1>
                <p className='text-sm pt-5'>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum corporis voluptatum iste dolores veritatis distinctio eligendi inventore omnis quae aliquam? ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam? Accusantium reprehenderit aliquid est excepturi.</p>
            </div>
            <div className='pt-5 '>
                <Image src="/images/g3.jpg" alt='' className='rounded-2xl'  height={600} width={600} />
            </div>
        </div>
        <div className=' py-12 rounded-3xl px-12 bg-sky-100'>
            <div >
                <h1 className='font-bold text-2xl'>App access control</h1>
                <p className='text-sm pt-5'>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum corporis voluptatum iste dolores veritatis distinctio eligendi inventore omnis quae aliquam? ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam? Accusantium reprehenderit aliquid est excepturi.</p>
            </div>
            <div className='pt-5 '>
                <Image src="/images/g5.avif" alt='' className='rounded-2xl'  height={700} width={700} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
