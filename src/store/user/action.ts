import { Categories } from 'store/categories/types';
import { SET_NAME, SET_FAVORITE_CATEGORIES } from './constants';
import { dispatchSetName, dispatchSetFavoriteCategories } from './types';

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
