import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-40 bg-black/50 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/' passHref>
          <img src='/static/logo.png' alt='Logo' className='h-8 w-8' />
        </Link>
        <div className='flex items-center justify-center gap-6'>
          <a
            href='https://github.com/lrmn7/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
