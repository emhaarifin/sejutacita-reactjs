import { Book } from 'store/books/types';
import { Categories } from 'store/categories/types';
import {
  SET_NAME,
  SET_FAVORITE_CATEGORIES,
  ADD_BOOKMARK_BOOK,
  DELETE_BOOKMARK_BOOK,
  ADD_READING_BOOKS,
} from './constants';

export interface readingBooks extends Book {
  isBookmark: boolean;
}
export interface UserState {
  name: string;
  favoriteCategories: Categories[];
  readingBooks: readingBooks[];
}

export interface dispatchSetName {
  type: typeof SET_NAME;
  payload: {
    name: string;
  };
}

export interface dispatchSetFavoriteCategories {
  type: typeof SET_FAVORITE_CATEGORIES;
  payload: {
    favoriteCategories: Categories[];
  };
}

export interface dispatchAddBookmarkBook {
  type: typeof ADD_BOOKMARK_BOOK;
  payload: {
    book: Book;
  };
}

export interface dispatchDeleteBookmarkBook {
  type: typeof DELETE_BOOKMARK_BOOK;
  payload: {
    book: Book;
  };
}

export interface dispatchAddReadingBooks {
  type: typeof ADD_READING_BOOKS;
  payload: {
    book: Book;
  };
}

export type DispatchType =
  | dispatchSetName
  | dispatchSetFavoriteCategories
  | dispatchAddBookmarkBook
  | dispatchDeleteBookmarkBook
  | dispatchAddReadingBooks;
