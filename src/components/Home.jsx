import React from 'react';
import { CiPaperplane } from 'react-icons/ci';

const Home = () => {
  return (
    <div className='bg-black pb-20 h-screen flex flex-col justify-center items-center text-center'>
      <div>
        <h1 className='text-white text-3xl sm:text-7xl pb-2'>Product <span className='text-green-300'>Designer</span> </h1>
        <h1 className='text-white text-3xl sm:text-7xl pt-2'> <span className='text-green-300'>Building</span> Things</h1>
        <p className='text-gray-200 pt-12'>Open for Work</p>

        <div className='flex justify-center pt-4'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-2xl hover:bg-gray-700'>
            <span className='group-hover:scale-125 duration-300 rot'>
              <CiPaperplane className='mr-2 size-5' />
            </span>
            Lets Connect
          </button>
        </div>

        {/* Add more content here if needed */}
      </div>
    </div>
  );
};

export default Home;
