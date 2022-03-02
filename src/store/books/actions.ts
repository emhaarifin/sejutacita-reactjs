import { RootState } from '../index';
import { Dispatch } from 'redux';
import {
  REQUEST_GET_BOOKS,
  SUCCESS_GET_BOOKS,
  ERROR_GET_BOOKS,
  LOAD_MORE_BOOKS,
  RESET_BOOKS_REDUCERS,
} from './constants';
import { dispatchGetBooks, dispatchLoadMoreBooks, dispatchResetBooksReducers } from './types';
import axios, { AxiosError } from 'axios';

export const getBooks =
  ({ categoryId, size = 10 }: { categoryId: number; size?: number }) =>
  async (dispatch: Dispatch<dispatchGetBooks>, getState: () => RootState) => {
    const page = getState().books.page;
    dispatch({ type: REQUEST_GET_BOOKS });
    try {
      const books = (await axios.get(`fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`)).data;
      dispatch({ type: SUCCESS_GET_BOOKS, payload: { books } });
      return books;
    } catch (error) {
      const errorMsg = (error as AxiosError)?.response?.statusText || 'Something Went Wrong';
      dispatch({ type: ERROR_GET_BOOKS, payload: { errorMsg } });
      return error;
    }
  };

export const loadMoreBooks = (): dispatchLoadMoreBooks => ({ type: LOAD_MORE_BOOKS });

export const resetBooksReducer = (): dispatchResetBooksReducers => ({ type: RESET_BOOKS_REDUCERS });
