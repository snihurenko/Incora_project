import Axios from '../axios';
import {
  GetPostsResponse,
  Post,
  PostDataResponse,
  DeletePostResponse,
  EditPostResponse,
  GetLimitedPostResponse
} from './types';

export const getPosts = (): Promise<GetPostsResponse> => {
  return Axios.instance.get('/posts');
};

export const addPost = (post: Post): Promise<PostDataResponse> => {
  return Axios.instance.post('/posts', post);
};

export const deletePost = (id: number): Promise<DeletePostResponse> => {
  return Axios.instance.delete(`/posts/${id}`);
};

export const editPost = (id: number, post: Post): Promise<EditPostResponse> => {
  return Axios.instance.put(`/posts/${id}`, post);
};

// export const getLimitedPosts = (limit: number, page: number): Promise<GetLimitedPostResponse> => {
//   return Axios.instance.get(`/posts?_limit=${limit}&_page=${page}`);
// };

export const getLimitedPosts = (limit: number, page: number): Promise<GetLimitedPostResponse> => {
  return Axios.instance.get('/posts', {
    params: {
      _limit: limit,
      _page: page
    }
  });
};
