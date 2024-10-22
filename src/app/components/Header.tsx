'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=' w-full flex justify-center font-[inter]'>
      <div className='max-w-[1440px] w-full  '>
        <div className='w-full flex px-[112px] pt-[45px] justify-between items-center '>
          <div>
            <Image
              src='/Logo.svg'
              alt='logo'
              width={180}
              height={38}
              priority
            />
          </div>

          <nav className='max-w-[499px] h-[68px] w-full flex items-center justify-center bg-[#FFFFFF99] rounded-[20px]'>
            <ul className='flex justify-between '>
              <li className='mr-[47px]'>
                <Link
                  href='/'
                  className=' font-normal text-[16px] leading-[24px]  '
                >
                  Home
                </Link>
              </li>
              <li className='mr-[47px]'>
                <Link
                  href='/about'
                  className='font-normal text-[16px] leading-[24px]  '
                >
                  About
                </Link>
              </li>
              <li className='mr-[47px]'>
                <Link
                  href='/works'
                  className='font-normal text-[16px] leading-[24px]  '
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href='/sevice'
                  className='font-normal text-[16px] leading-[24px]  '
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>

          <nav className='flex'>
            <ul className='flex'>
              <button
                className='mr-[19px] flex justify-center items-center
               font-normal text-[16px] leading-[24px] cursor-pointer'
              >
                Sign In
              </button>

              <button
                className='w-[132px] h-[48px] rounded-[10px] flex justify-center items-center bg-[#4E47FF]
                font-normal text-[16px] leading-[24px] cursor-pointer'
              >
                Sign Up
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
