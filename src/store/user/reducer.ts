import {
  SET_NAME,
  SET_FAVORITE_CATEGORIES,
  ADD_BOOKMARK_BOOK,
  DELETE_BOOKMARK_BOOK,
  ADD_READING_BOOKS,
} from './constants';
import { UserState, DispatchType } from './types';
const initialState: UserState = {
  name: '',
  favoriteCategories: [],
  readingBooks: [],
};

const userReducer = (state = initialState, action: DispatchType) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case SET_FAVORITE_CATEGORIES:
      return {
        ...state,
        favoriteCategories: action.payload.favoriteCategories,
      };
    case ADD_BOOKMARK_BOOK:
      return {
        ...state,
        readingBooks: state.readingBooks.map((book) =>
          book.id === action.payload.book.id && book.category_id === action.payload.book.category_id
            ? { ...action.payload.book, isBookmark: true }
            : book
        ),
      };
    case DELETE_BOOKMARK_BOOK:
      return {
        ...state,
        readingBooks: state.readingBooks.map((book) =>
          book.id === action.payload.book.id && book.category_id === action.payload.book.category_id
            ? { ...action.payload.book, isBookmark: false }
            : book
        ),
      };
    case ADD_READING_BOOKS:
      const inList = state.readingBooks.find((readingBook) =>
        readingBook.id === action.payload.book.id && readingBook.category_id === action.payload.book.category_id
          ? true
          : false
      );

      return {
        ...state,
        readingBooks: inList
          ? state.readingBooks
          : [...state.readingBooks, { ...action.payload.book, isBookmark: false }],
      };
    default:
      return state;
  }
};

export default userReducer;
