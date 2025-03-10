import Link from 'next/link';
import React from 'react';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

const Header = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto max-w-[1380px]'>
        <nav className='flex items-center justify-between h-14'>
          <ul className='flex items-center gap-6 text-[17px] text-black'>
            <Link href={'/'}>
              <li className='relative cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 after:content-[" "] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>
                Home
              </li>
            </Link>
            <Link href={'/about'}>
              <li className='relative cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 after:content-[" "] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>
                About
              </li>
            </Link>
            <Link href={'/support'}>
              <li className='relative cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 after:content-[" "] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>
                Support
              </li>
            </Link>
          </ul>
          <div className='cursor-pointer text-[24px] transition-all duration-300 ease-in-out hover:scale-110'>
            <Link href={'/dashboard'}>
              <TbLayoutDashboardFilled className='text-black hover:text-blue-500'/>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;