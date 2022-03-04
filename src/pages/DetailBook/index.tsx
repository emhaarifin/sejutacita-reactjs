import AttributeBookDetail from 'components/AttributeBookDetail';
import Bookmark from 'components/Icons/Bookmark';
import ImageBook from 'components/ImageBook';
import ReadBook from 'components/ReadBook';
import useQuery from 'hooks/useQuery';
import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RootState } from 'store';
import { Book } from 'store/books/types';
import { addReadingBooks, handleSetBookmarkBook } from 'store/user/action';
import { readingBooks } from 'store/user/types';
import getCategoryById from 'utils/getCategoryById';

interface locationState {
  book: Book;
}
const PageDetailBook: React.FC = () => {
  const location = useLocation();
  const params = useParams() as { category_id: string; id: string };
  const query = useQuery();
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const categoriesState = useSelector((state: RootState) => state.categories);
  const handleAddReadingBook = useRef(() => {});
  const bookStateLocation = (location?.state as locationState)?.book as readingBooks;
  const book = (userState.readingBooks.find(
    (readingBook) => readingBook?.id === Number(params?.id) && readingBook?.category_id === Number(params?.category_id)
  ) as readingBooks) || { ...bookStateLocation, isBookmark: false };

  const queryChapter = Number(query.get('chapter'));
  const selectedChapter = queryChapter && queryChapter - 1;
  const setSelectedChapter = (selected: number) => selected + 1;
  const readChapter = queryChapter && book.sections[selectedChapter];

  const handleBookmark = () => dispatch(handleSetBookmarkBook({ book }));
  handleAddReadingBook.current = () => dispatch(addReadingBooks({ book }));

  useEffect(() => {
    handleAddReadingBook.current();
  }, []);

  if (readChapter) {
    return (
      <ReadBook
        nextChapter={
          selectedChapter !== book.sections.length - 1 ? (
            <Link
              to={`?chapter=${setSelectedChapter(queryChapter)}`}
              className='p-2 bg-indigo-500 mb-5 text-center rounded-full text-white'
              state={{ book }}
            >
              Continue Reading
            </Link>
          ) : (
            <></>
          )
        }
        title={readChapter?.title}
        content={readChapter?.content}
      ></ReadBook>
    );
  }

  if (!Boolean(book))
    return (
      <div className='flex justify-center items-center flex-1'>
        <h1 className='text-3xl text-center align-middle'>Can't get the book</h1>
      </div>
    );
  return (
    <Fragment>
      <section className='flex flex-col md:flex-row py-5 max-w-5xl mx-auto'>
        <section className='flex w-full md:w-2/5 flex-col  items-center justify-center h-full'>
          <ImageBook alt={book.title} src={book.cover_url} />
          <div className='md:mx-6  text-center'>
            <div className='flex items-center my-4'>
              <button disabled className='py-1 bg-slate-200 border-slate-300 border rounded-full px-6'>
                Listen
              </button>
              <div className='m-2'></div>
              <Link
                to={`?chapter=1`}
                className='py-1 bg-slate-200 border-slate-300 border rounded-full px-6 '
                state={{ book }}
              >
                Read
              </Link>
            </div>
          </div>
        </section>
        <div className='mx-9' />
        <section className='w-full md:w-3/5 pt-6'>
          <div className='flex items-center'>
            <button onClick={handleBookmark} aria-label='bookmark'>
              <Bookmark size={28} fill={book.isBookmark ? '#6366f1' : '#fff'} stroke={'#6366f1'} />
            </button>
            <h1 className='text-4xl text-medium py-3 line-clamp-1'>{book.title}</h1>
          </div>
          <AttributeBookDetail
            title={`Author ${book?.authors?.length > 1 && 's'}`}
            content={
              <>
                <p className='text-xl py-3'>
                  {book?.authors?.map((author: string, index) =>
                    index + 1 === book.authors.length ? (
                      <span key={author}>{author}</span>
                    ) : (
                      <span key={author}>{author}, </span>
                    )
                  )}
                </p>
              </>
            }
          />
          <AttributeBookDetail
            title='Category'
            content={`${getCategoryById(categoriesState.categories, book.category_id)?.name}`}
          />
          <AttributeBookDetail title="What's it about?" content={book.description}></AttributeBookDetail>
          <AttributeBookDetail
            title="What's inside?"
            content={
              <ol className='list-decimal list-inside text-xl py-3'>
                {book?.sections?.map((section, index) => (
                  <li key={section.title} className='pb-3'>
                    <Link to={`?chapter=${setSelectedChapter(index)}`} state={{ book }}>
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ol>
            }
          ></AttributeBookDetail>
        </section>
      </section>
    </Fragment>
  );
};

export default PageDetailBook;
