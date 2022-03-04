import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, resetBooksReducer } from 'store/books/actions';
import { RootState } from 'store';
import { getCategories } from 'store/categories/actions';
import Books from 'components/Books';
import { Book } from 'store/books/types';
const PageHome: React.FC = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state: RootState) => state.books);
  const categoriesState = useSelector((state: RootState) => state.categories);
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(resetBooksReducer());
      await dispatch(getCategories());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (categoriesState.categories.length > 0) {
      Promise.all(
        categoriesState.categories.map((category) => {
          return dispatch(getBooks({ categoryId: category.id, size: 5 }));
        })
      );
    }
  }, [categoriesState.categories, dispatch]);

  useEffect(() => {
    if (booksState.books.length > 0) {
      const shuffle = booksState.books
        .map((book) => ({ ...book, sort: Math.random() } as Book & { sort?: number }))
        .sort((a, b) => a.sort! - b.sort!)
        .map((book) => {
          delete book.sort;
          return book;
        });
      setBooks(shuffle);
      setLoading(false);
    }
  }, [booksState.books]);

  return (
    <Fragment>
      <section className='my-6'>
        <div className='py-5'>
          <p className='text-xl'>Recommended for you</p>
        </div>
        <Books books={books} loading={loading} />
      </section>
    </Fragment>
  );
};

export default PageHome;
