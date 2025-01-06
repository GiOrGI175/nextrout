'use client';

import Image from 'next/image';
import Link from 'next/link';
import useHeaderAuth from '../../hooks/show';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How it Works', href: '/works' },
  { name: 'Services', href: '/sevice' },
];

const Header = () => {
  const toggleSignIn = useHeaderAuth((state) => state.toggleSignIn);

  const toggleSignUp = useHeaderAuth((state) => state.toggleSignUp);

  const PathName = usePathname();

  return (
    <header className=' w-full flex justify-center font-[inter]'>
      <div className='max-w-[1440px] w-full  '>
        <div className='w-full flex px-[112px] pt-[45px] justify-between items-center '>
          <div>
            <Image
              src='/Logo.svg'
              alt='logo'
              width={180}
              height={300}
              priority
            />
          </div>

          <nav className='max-w-[499px] h-[68px] w-full flex items-center justify-center bg-[#FFFFFF99] rounded-[20px] '>
            <ul className='flex justify-between '>
              {navLinks.map((link) => {
                const isActive = PathName.startsWith(link.href);

                return (
                  <li key={`${link.name} + ${link.href}`} className='mr-[47px]'>
                    <Link
                      href={link.href}
                      className={`font-normal text-[16px] leading-[24px]  
                        ${isActive ? 'text-[#252432]' : 'text-[#8987A1]'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav className='flex'>
            <ul className='flex'>
              <button
                className='mr-[19px] flex justify-center items-center
               font-normal text-[16px] leading-[24px] cursor-pointer'
                onClick={toggleSignIn}
              >
                Sign In
              </button>

              <button
                className='w-[132px] h-[48px] rounded-[10px] flex justify-center items-center bg-[#4E47FF]
                font-normal text-[16px] leading-[24px] cursor-pointer'
                onClick={toggleSignUp}
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
