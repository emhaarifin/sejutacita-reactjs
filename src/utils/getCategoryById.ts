import { Categories } from 'store/categories/types';

const getCategoryById = (categories: Categories[] = [], id: number) => {
  return categories.find((category) => category?.id === id);
};

export default getCategoryById;
