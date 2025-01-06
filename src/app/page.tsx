'use client';

import Link from 'next/link';
import AllExpenses from './components/_molecules/AllExpenses';
import useSetTrue from './hooks/show';

const Home = () => {
  const showSignIn = useSetTrue((state) => state.showSignIn);
  const showSignUp = useSetTrue((state) => state.showSignUp);

  return (
    <main className='w-full flex flex-col justify-center items-center font-[Raleway]'>
      <div className='max-w-[1440px] w-full '>
        <div className='w-full mt-[148px] flex flex-col  items-center'>
          {((showSignIn && true) || (showSignUp && true)) && (
            <div className='mt-[65px] mb-[80px] flex transition-all duration-500 ease-in-out '>
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
          <h1 className='max-w-[764px] w-full font-bold text-[73px] leading-[74px] text-center text-[#252432]'>
            Expense
          </h1>
          <button className='mt-[50px] mr-[10px] w-[211px] h-[60px] rounded-[10px] bg-[#252432] transition-all duration-500 ease-in-out text-white  hover:opacity-[80%] font-bold text-[16px] leading-[24px] '>
            Add Expense
          </button>
        </div>
        <>
          <AllExpenses />
        </>
      </div>
    </main>
  );
};

export default Home;
