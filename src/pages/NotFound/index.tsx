import React from 'react';

const PageNotFound: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='inline-block border-r mx-3 px-3 border-black text-3xl'>404</h1>
      <div className='inline-block text-3xl'>
        <h2>This page could not be found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
