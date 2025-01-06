'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/_molecules/Header';
import useSetTrue from './hooks/show';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setOverlay = useSetTrue((state) => state.setOverlay);

  return (
    <html lang='en'>
      <body className='bg-[#F5F8FF]'>
        <Header />
        {children}
        {/* overlay start */}
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-10 ${
            setOverlay ? 'block' : 'hidden'
          } `}
        ></div>
        {/* overlay end */}
      </body>
    </html>
  );
}
