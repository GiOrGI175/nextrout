'use client';

import Link from 'next/link';
import useHeaderAuth from '@/app/store/store';

const Works = () => {
  const { showSignIn, showSignUp } = useHeaderAuth();

  return (
    <main className='w-full flex flex-col justify-center items-center font-[Raleway]'>
      <div className='max-w-[1440px] w-full '>
        <div className='w-full mt-[148px] flex justify-center'>
          <h1 className='max-w-[764px] w-full font-bold text-[73px] leading-[74px] text-center text-[#252432]'>
            Awesome UI Dark Template Works Page
          </h1>
        </div>
      </div>
      {((showSignIn && true) || (showSignUp && true)) && (
        <div className='mt-[65px] flex transition-all duration-500 ease-in-out '>
          {showSignIn && (
            <button className='mr-[10px] w-[211px] h-[60px] rounded-[10px] bg-[#252432] transition-all duration-500 ease-in-out  hover:opacity-[80%]'>
              <Link
                href='/login'
                className='font-bold text-[16px] leading-[24px] text-white '
              >
                Get in Touch for sing in
              </Link>
            </button>
          )}
          {showSignUp && (
            <button className='mr-[10px] w-[211px] h-[60px] rounded-[10px] bg-[#252432] transition-all duration-500 ease-in-out  hover:opacity-[80%]'>
              <Link
                href='/register'
                className='font-bold text-[16px] leading-[24px] text-white '
              >
                Get in Touch for sign up
              </Link>
            </button>
          )}
        </div>
      )}
    </main>
  );
};

export default Works;
