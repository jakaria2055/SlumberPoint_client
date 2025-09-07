import React from 'react'
import HeroForm from './smallcomponents/HeroForm'

function Hero() {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-[#FFF5F2] bg-[url("/images/hero.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className='bg-[#26667F]/50 px-3.5 py-1 rounded-full mt-20'>The Test of Your Home in Hotel</p>
      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Find Your Perfect Place to Spend Holidays</h1>
      <p className='max-w-130 mt-2 text-xl md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem consequuntur nemo nulla aperiam deleniti.</p>

      <HeroForm />
    </div>
  )
}

export default Hero