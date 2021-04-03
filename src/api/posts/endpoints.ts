import Axios from '../axios';
import { GetPostsResponse, Post } from './types';

export const getPosts = (): Promise<any> => {
  return Axios.instance.get('/posts');
};

export const addPost = (post: Post): Promise<any> => {
  return Axios.instance.post('/posts', post);
};

export const deletePost = (id: number) => {
  return Axios.instance.delete(`/posts/${id}`);
};

export const editPost = (id: number, post: Post) => {
  return Axios.instance.put(`/posts/${id}`, post);
};

export const getLimitedPosts = (limit: number, page: number) => {
  return Axios.instance.get(`/posts?_limit=${limit}&_page=${page}`);
};
