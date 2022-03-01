import { REQUEST_GET_BOOKS, SUCCESS_GET_BOOKS, ERROR_GET_BOOKS, LOAD_MORE_BOOKS } from './constants';

export interface Section {
  title: string;
  content: string;
}

export interface Book {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: Section[];
  audio_length: number;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: boolean;
  errorMsg: string;
  page: number;
}

export interface dispatchRequestGetBooks {
  type: typeof REQUEST_GET_BOOKS;
}
export interface dispatchSuccesstGetBooks {
  type: typeof SUCCESS_GET_BOOKS;
  payload: {
    books: Book[];
  };
}
export interface dispatchErrorGetBooks {
  type: typeof ERROR_GET_BOOKS;
  payload: {
    errorMsg: string;
  };
}

export type dispatchGetBooks = dispatchRequestGetBooks | dispatchSuccesstGetBooks | dispatchErrorGetBooks;

export interface dispatchLoadMoreBooks {
  type: typeof LOAD_MORE_BOOKS;
}

export type DispatchTypeBooks = dispatchGetBooks | dispatchLoadMoreBooks;
