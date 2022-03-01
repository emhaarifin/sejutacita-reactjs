import { RootState } from '../index';
import { Dispatch } from 'redux';
import { REQUEST_GET_BOOKS, SUCCESS_GET_BOOKS, ERROR_GET_BOOKS, LOAD_MORE_BOOKS } from './constants';
import { dispatchGetBooks, dispatchLoadMoreBooks } from './types';
import axios, { AxiosError } from 'axios';

export const getBooks = () => async (dispatch: Dispatch<dispatchGetBooks>, getState: () => RootState) => {
  const page = getState().books.page;
  dispatch({ type: REQUEST_GET_BOOKS });
  try {
    const books = (await axios.get(`fee-assessment-books?categoryId=1&page=${page}`)).data;
    dispatch({ type: SUCCESS_GET_BOOKS, payload: { books } });
    return books;
  } catch (error) {
    const errorMsg = (error as AxiosError)?.response?.statusText || 'Something Went Wrong';
    dispatch({ type: ERROR_GET_BOOKS, payload: { errorMsg } });
    return error;
  }
};

export const loadMoreBooks = () => (dispatch: Dispatch<dispatchLoadMoreBooks>) => {
  dispatch({ type: LOAD_MORE_BOOKS });
};
