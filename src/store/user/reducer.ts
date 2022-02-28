import { SET_NAME, SET_FAVORITE_CATEGORIES } from './constants';
import { UserState, DispatchType } from './types';
const initialState: UserState = {
  name: '',
  favoriteCategories: [],
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
    default:
      return state;
  }
};

export default userReducer;
