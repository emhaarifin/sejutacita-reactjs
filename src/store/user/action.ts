import { Dispatch } from 'redux';
import { Book } from 'store/books/types';
import { Categories } from 'store/categories/types';
import {
  SET_NAME,
  SET_FAVORITE_CATEGORIES,
  DELETE_BOOKMARK_BOOK,
  ADD_BOOKMARK_BOOK,
  ADD_READING_BOOKS,
} from './constants';
import {
  dispatchSetName,
  dispatchSetFavoriteCategories,
  dispatchDeleteBookmarkBook,
  dispatchAddBookmarkBook,
  dispatchAddReadingBooks,
  readingBooks,
} from './types';

export const setName = ({ name }: { name: string }): dispatchSetName => {
  return {
    type: SET_NAME,
    payload: { name },
  };
};

export const setFavoriteCategories = ({
  favoriteCategories,
}: {
  favoriteCategories: Categories[];
}): dispatchSetFavoriteCategories => {
  return {
    type: SET_FAVORITE_CATEGORIES,
    payload: { favoriteCategories },
  };
};

export const addBookmarkBook = ({ book }: { book: Book }): dispatchAddBookmarkBook => ({
  type: ADD_BOOKMARK_BOOK,
  payload: { book },
});

export const deleteBookmarkBook = ({ book }: { book: Book }): dispatchDeleteBookmarkBook => ({
  type: DELETE_BOOKMARK_BOOK,
  payload: { book },
});

export const handleSetBookmarkBook =
  ({ book }: { book: readingBooks }) =>
  (dispatch: Dispatch) => {
    return book.isBookmark ? dispatch(deleteBookmarkBook({ book })) : dispatch(addBookmarkBook({ book }));
  };

export const addReadingBooks = ({ book }: { book: Book }): dispatchAddReadingBooks => ({
  type: ADD_READING_BOOKS,
  payload: { book },
});
