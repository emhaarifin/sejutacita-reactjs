import Books from 'components/Books';
import LoadOnScroll from 'components/LoadOnScoll';
import useSearch from 'hooks/useSearch';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { getBooks, loadMoreBooks, resetBooksReducer } from 'store/books/actions';
import { Book } from 'store/books/types';
import getCategoryById from 'utils/getCategoryById';

type IParams = {
  category_id: string;
};
const PageExplore: React.FC = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state: RootState) => state.books);
  const categoriesState = useSelector((state: RootState) => state.categories);
  const refBooks = useRef(booksState.books);
  const [books, setBooks] = useState<Book[]>([]);
  const [hashMore, setHashMore] = useState<boolean>(true);
  const { valueSearchParams } = useSearch();
  const { category_id } = useParams<IParams>();
  const category = getCategoryById(categoriesState.categories, Number(category_id));

  const loadMore = async () => {
    await dispatch(loadMoreBooks());
    await dispatch(getBooks({ categoryId: Number(category_id) }));
  };

  useEffect(() => {
    let abortController = new AbortController();
    (async () => {
      await dispatch(resetBooksReducer());
      await dispatch(getBooks({ categoryId: Number(category_id) }));
    })();

    return () => {
      abortController.abort();
    };
  }, [dispatch, category_id]);

  useEffect(() => {
    if (booksState.books.length > 0 && !booksState.loading) {
      setBooks(booksState.books);
      refBooks.current = booksState.books;
    }
  }, [booksState.books, booksState.loading]);

  useEffect(() => {
    booksState.error || booksState.errorMsg === 'Not Found' ? setHashMore(false) : setHashMore(true);
  }, [booksState.error, booksState.errorMsg, booksState.loading]);

  useEffect(() => {
    if (valueSearchParams) {
      const findAuthor = refBooks.current.filter(
        (book) =>
          JSON.stringify(book.authors) ===
          JSON.stringify(
            book.authors.filter((author) => author.toLowerCase().indexOf(valueSearchParams.toLowerCase()) !== -1)
          )
      );
      const findTitle = refBooks.current.filter(
        (book) => book.title.toLowerCase().indexOf(valueSearchParams.toLowerCase()) !== -1
      );
      setBooks([...new Set([...findAuthor, ...findTitle])]);
    } else {
      setBooks(refBooks.current);
    }
  }, [valueSearchParams]);

  return (
    <Fragment>
      <Books
        books={books}
        loading={booksState.loading}
        RenderEmpty={() => (
          <div className='flex flex-col items-center justify-center'>
            <span className='flex-1'>
              {`Your search - ${valueSearchParams ?? ''} - did not match any book with  ${category?.name} category.
            `}
            </span>
          </div>
        )}
      />
      {books.length > 0 && hashMore && !valueSearchParams && (
        <LoadOnScroll loading={booksState.loading} hashMore={hashMore} onLoad={loadMore} />
      )}
    </Fragment>
  );
};

export default PageExplore;
