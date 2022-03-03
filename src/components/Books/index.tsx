import Defer from 'components/Defer';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Book } from 'store/books/types';
import getCategoryById from 'utils/getCategoryById';

import CardBook, { BookLoader } from 'components/CardBook';
interface BooksProps {
  books: Book[];
  loading: boolean;
  RenderEmpty?: () => JSX.Element;
}
const Books: React.FC<BooksProps> = ({ books = [], loading, RenderEmpty = () => <></> }) => {
  const categoriesState = useSelector((state: RootState) => state.categories);

  if (books.length === 0 && !loading) return <RenderEmpty />;

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      <Defer chunkSize={10}>
        {books.map((book) => (
          <CardBook
            key={`${book.id} - ${book.category_id}`}
            to={`/book/${book.category_id}/${book.id}`}
            state={{ book }}
            title={book.title}
            image={book.cover_url}
            author={book.authors[0]}
            category={getCategoryById(categoriesState.categories, book.category_id)?.name as string}
          />
        ))}
      </Defer>
      {loading && Array.from(Array(5), () => <BookLoader key={Math.random()} />)}
    </div>
  );
};

export default Books;
