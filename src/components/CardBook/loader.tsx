import React from 'react';

const BookLoader: React.FC = () => {
  return (
    <div className='h-full'>
      <div className='w-full skeleton rounded-lg overflow-hidden' style={{ aspectRatio: '4/6' }} />
      <div className='py-4'>
        <div className='skeleton h-4'></div>
        <div className='skeleton h-4 my-3'></div>
      </div>
    </div>
  );
};

export default BookLoader;
