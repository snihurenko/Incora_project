import Axios from '../axios';
//import { GetHotelsResponse, Hotel, PostHotelResponse } from './types';

export const getPosts = (): Promise<any> => {
  return Axios.instance.get('/posts');
};

export const addPost = (post: any): Promise<any> => {
  return Axios.instance.post('/posts', post);
};

export const deletePost = (id: number) => {
  return Axios.instance.delete(`/posts/${id}`);
};

export const editPost = (id: number, post: any) => {
  return Axios.instance.put(`/posts/${id}`, post);
};

export const getLimitedPosts = (limit: number, page: number) => {
  return Axios.instance.get(`/posts?_limit=${limit}&_page=${page}`);
};
