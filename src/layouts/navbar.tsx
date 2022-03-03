import Bookmark from 'components/Icons/Bookmark';
import Brand from 'components/Icons/Brand';
import React, { lazy } from 'react';
import { Link, useMatch } from 'react-router-dom';

const Search = lazy(() => import('components/Search'));
const Navbar: React.FC = () => {
  const isPageExplore = Boolean(useMatch('/explore/*'));
  return (
    <nav className='px-2 py-3 relative z-50 container mx-auto'>
      <div className='flex flex-wrap justify-between items-stretch'>
        <Link to='/'>
          <Brand />
        </Link>

        <div className={`flex flex-wrap  sm:w-auto sm:p-0 ${isPageExplore ? 'py-4 justify-between w-full' : ''}`}>
          {isPageExplore && <Search />}
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
