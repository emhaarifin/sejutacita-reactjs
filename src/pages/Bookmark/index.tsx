import Books from 'components/Books';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { readingBooks } from 'store/user/types';
import getCategoryById from 'utils/getCategoryById';

const PageBookmark: React.FC = () => {
  const userState = useSelector((state: RootState) => state.user);
  const categoriesState = useSelector((state: RootState) => state.categories);
  const refBooks = useRef(userState.readingBooks);
  const refCategories = useRef(categoriesState.categories);
  const [books, setBooks] = useState<readingBooks[]>([]);
  const [filterBy, setFilterBy] = useState<string>('all');

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  useEffect(() => {
    filterBy === 'all'
      ? setBooks(refBooks.current)
      : setBooks(
          refBooks.current.filter((book) => getCategoryById(refCategories.current, book.category_id)?.name === filterBy)
        );
  }, [categoriesState.categories, filterBy]);

  return (
    <Fragment>
      <section className='flex justify-end'>
        <select onChange={handleFilter} className='px-3 py-2 border bg-slate-50 border-slate-300 rounded-full '>
          <option value='all'>All</option>
          {categoriesState.categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </section>
      <div className='my-5'></div>
      <Books
        books={books.filter((book) => book.isBookmark)}
        loading={false}
        RenderEmpty={() => (
          <div className='flex flex-col items-center justify-center'>
            <span className='flex-1'>Don't have a bookmark list with {filterBy} category</span>
          </div>
        )}
      />
    </Fragment>
  );
};

export default PageBookmark;
