import Bookmark from 'components/Icons/Bookmark';
import Brand from 'components/Icons/Brand';
import Search from 'components/Search';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='px-2 py-3 relative z-50 container mx-auto'>
      <div className='flex flex-wrap justify-between items-stretch'>
        <Link to='/'>
          <Brand />
        </Link>

        <div className='flex justify-between flex-wrap w-full sm:w-auto py-4 sm:p-0'>
          <Search />
          <Link to='/bookmark' aria-label='link'>
            <div className='flex rounded-full bg-indigo-500 items-center justify-center px-4 sm:px-6 py-1'>
              <Bookmark fill='#fff' size={32} />
              <span className='text-white text-md hidden sm:block pr-1.5'>Bookmark</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
