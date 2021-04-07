import Axios from '../axios';
//import { GetHotelsResponse, Hotel, PostHotelResponse } from './types';

export const getPosts = (): Promise<any> => {
  return Axios.instance.get('/posts');
};

// export const postHotel = (hotel: Hotel): Promise<PostHotelResponse> => {
//   return Axios.instance.post('/hotel', hotel);
// };

// export const deleteCategory = (id: number) => {
//   return Axios.instance.delete(`/categories?id=${id}`);
// };
