import Axios from '../axios';
import { GetHotelsResponse, Hotel, PostHotelResponse } from './types';

export const getHotels = (): Promise<GetHotelsResponse> => {
  return Axios.instance.get('/hotel');
};

export const postHotel = (hotel: Hotel): Promise<PostHotelResponse> => {
  return Axios.instance.post('/hotel', hotel);
};

// export const deleteCategory = (id: number) => {
//   return Axios.instance.delete(`/categories?id=${id}`);
// };
