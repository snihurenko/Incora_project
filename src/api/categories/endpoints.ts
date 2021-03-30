import Axios from '../axios';
import { GetCategoriesRResponse, PostCategoryBody } from './types';

export const getCategories = (): Promise<GetCategoriesRResponse> => {
  return Axios.instance.get('/categories');
};

export const postCategory = (category: PostCategoryBody) => {
  return Axios.instance.post('/categories', category);
};

export const deleteCategory = (id: number) => {
  return Axios.instance.delete(`/categories?id=${id}`);
};
