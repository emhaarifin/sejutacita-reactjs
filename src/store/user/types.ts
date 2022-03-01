import { Categories } from 'store/categories/types';
import { SET_NAME, SET_FAVORITE_CATEGORIES } from './constants';

export interface UserState {
  name: string;
  favoriteCategories: Categories[];
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

export type DispatchType = dispatchSetName | dispatchSetFavoriteCategories;
