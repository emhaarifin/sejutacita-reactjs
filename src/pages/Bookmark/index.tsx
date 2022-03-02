import CardBook from 'components/CardBook';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { readingBooks } from 'store/user/types';
import getCategoryById from 'utils/getCategoryById';

const PageBookmark: React.FC = () => {
  const userState = useSelector((state: RootState) => state.user);
  const categoryState = useSelector((state: RootState) => state.categories);

  const refBooks = useRef(userState.readingBooks);
  const refCategory = useRef(categoryState.categories);
  const [books, setBooks] = useState<readingBooks[]>(userState.readingBooks);
  const [filterBy, setFilterBy] = useState<string>('all');

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(e.target.value);
  };
  useEffect(() => {
    filterBy === 'all'
      ? setBooks(refBooks.current)
      : setBooks(
          refBooks.current.filter((book) => getCategoryById(refCategory.current, book.category_id)?.name === filterBy)
        );
  }, [filterBy]);

  return (
    <Fragment>
      <section className='flex justify-end'>
        <select onChange={handleFilter} className='px-3 py-2 border bg-slate-50 border-slate-300 rounded-full '>
          <option value='all'>All</option>
          {categoryState.categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </section>
      <div className='my-5'></div>
      <section>
        {books.length > 0 && books.find((book) => book.isBookmark) ? (
          <Fragment>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
              {books.map(
                (book) =>
                  book.isBookmark && (
                    <CardBook
                      key={`${book.id} - ${book.category_id}`}
                      to={`/book/${book.category_id}/${book.id}`}
                      state={{ book: book }}
                      image={book.cover_url}
                      category={getCategoryById(categoryState.categories, book.category_id)?.name as string}
                      title={book.title}
                      author={book.authors[0]}
                    />
                  )
              )}
            </div>
          </Fragment>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <span className='flex-1'>Don't have a bookmark list</span>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default PageBookmark;
