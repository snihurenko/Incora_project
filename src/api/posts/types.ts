import { AxiosResponse } from 'axios';

export interface Post {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export type GetPostsResponse = AxiosResponse<Post[]>;

export type PostDataResponse = AxiosResponse<Post>;

export type DeletePostResponse = AxiosResponse<Post>;

export type EditPostResponse = AxiosResponse<Post>;

export type GetLimitedPostResponse = AxiosResponse<Post[]>;
