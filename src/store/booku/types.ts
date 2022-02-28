import { ERROR_GET_CATEGORIES, REQUEST_GET_CATEGORIES, SUCCESS_GET_CATEGORIES } from './constants';
export interface Categories {
  id: number;
  name: string;
}

export interface BookuState {
  categories: Categories[];
  loading: boolean;
  error: boolean;
  errorMsg: string;
}

export interface dispatchRequestGetCategories {
  type: typeof REQUEST_GET_CATEGORIES;
}

export interface dispatchSuccesstGetCategories {
  type: typeof SUCCESS_GET_CATEGORIES;
  payload: {
    categories: Categories[];
  };
}

export interface dispatchErrorGetCategories {
  type: typeof ERROR_GET_CATEGORIES;
  payload: {
    errorMsg: string;
  };
}

export type dispatchGetCategories =
  | dispatchRequestGetCategories
  | dispatchSuccesstGetCategories
  | dispatchErrorGetCategories;

export type DispatchType = dispatchGetCategories;
