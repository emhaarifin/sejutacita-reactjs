import { SUCCESS_GET_CATEGORIES, ERROR_GET_CATEGORIES, REQUEST_GET_CATEGORIES } from './constants';
import { CategoriesState, DispatchTypeCategories } from './types';
const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: false,
  errorMsg: '',
  page: 0,
};

const categoriesReducer = (state = initialState, action: DispatchTypeCategories) => {
  switch (action.type) {
    case REQUEST_GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: '',
      };
    case SUCCESS_GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        error: false,
        errorMsg: '',
        categories: action.payload.categories,
      };
    case ERROR_GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
