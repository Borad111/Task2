import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Service from '../Service/Service'

function Home() {
  return (
    <div className='bg-white text-black'>
       <Hero/>
      <Category/>
      <Service/>
    </div>
  )
}

export default Home
