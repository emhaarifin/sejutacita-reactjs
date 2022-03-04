import useSearch from 'hooks/useSearch';
import React from 'react';

const Search: React.FC = () => {
  const { handleSubmit } = useSearch();
  return (
    <form className='flex pr-2 flex-1 h-10' onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        className='bg-slate-50 px-4 text-lg border border-slate-200 flex-1 h-full rounded-full '
        placeholder='Search'
      ></input>
    </form>
  );
};

export default Search;
