import {
  REQUEST_GET_BOOKS,
  SUCCESS_GET_BOOKS,
  ERROR_GET_BOOKS,
  LOAD_MORE_BOOKS,
  RESET_BOOKS_REDUCERS,
} from './constants';
import { BooksState, DispatchTypeBooks } from './types';
const initialState: BooksState = {
  books: [],
  loading: false,
  error: false,
  errorMsg: '',
  page: 0,
};

const booksReducer = (state = initialState, action: DispatchTypeBooks) => {
  switch (action.type) {
    case REQUEST_GET_BOOKS:
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: '',
      };
    case SUCCESS_GET_BOOKS:
      return {
        ...state,
        loading: false,
        error: false,
        books: [...state.books, ...action.payload.books],
      };

    case ERROR_GET_BOOKS:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload.errorMsg,
      };
    case LOAD_MORE_BOOKS:
      return {
        ...state,
        page: Number(state.page + 1),
      };
    case RESET_BOOKS_REDUCERS:
      return initialState;
    default:
      return state;
  }
};

export default booksReducer;
