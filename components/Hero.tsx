import React from 'react';

export default function Hero() {
  return (
    <section className='bg-main h-screen bg-cover container'>
      <div className='flex h-screen justify-center items-center  flex-col text-white text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-7xl font-f1 font-semibold'>
          Welcome to <span className='italic'>Villa</span> resort
        </h1>
        <h2 className='mt-2  sm:text-xl lg:text-2xl'>
          Discover our world-class hotel & restaurant resort.
        </h2>
        <div className='flex flex-col w-full sm:w-auto px-12 gap-4 sm:flex-row mt-8'>
          <button className='py-2 px-8 border-2 bg-villa hover:bg-[#c6164e] border-villa rounded-full transition duration-500 tracking-wide'>
            EXPLORE THE BEAUTY
          </button>
          <button className='py-2 px-8 border-2 rounded-full hover:bg-white hover:text-gray-500 transition duration-500 tracking-wide'>
            DOWNLOAD
          </button>
        </div>
      </div>
    </section>
  );
}
