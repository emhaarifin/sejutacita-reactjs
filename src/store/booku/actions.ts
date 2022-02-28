import { Dispatch } from 'redux';
import { REQUEST_GET_CATEGORIES, ERROR_GET_CATEGORIES, SUCCESS_GET_CATEGORIES } from './constants';
import { dispatchGetCategories } from './types';
import axios, { AxiosError } from 'axios';

export const getCategories = () => async (dispatch: Dispatch<dispatchGetCategories>) => {
  dispatch({ type: REQUEST_GET_CATEGORIES });
  try {
    const data = (await axios.get('fee-assessment-categories')).data;
    return dispatch({ type: SUCCESS_GET_CATEGORIES, payload: { categories: data } });
  } catch (error) {
    const errorMsg = (error as AxiosError).message || 'Something Went Wrong';
    dispatch({ type: ERROR_GET_CATEGORIES, payload: { errorMsg } });
    return error;
  }
};
