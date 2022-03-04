import React from 'react';
import ImageBook from 'components/ImageBook';
import { Link } from 'react-router-dom';
import { Book } from 'store/books/types';

interface BookProps {
  image: string;
  category: string;
  title: string;
  author: string;
  to: string;
  state: { book: Book };
}
const CardBook: React.FC<BookProps> = ({ image, title, category, author, to, state }) => {
  return (
    <Link to={to} state={state}>
      <div>
        <ImageBook src={image} alt={title} />
        <div className='text-center py-4 px-3'>
          <p className='font-medium line-clamp-2'>{author}</p>
          <p className='text-slate-500 line-clamp-2'>{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardBook;
