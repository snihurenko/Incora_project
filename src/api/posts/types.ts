import { AxiosResponse } from 'axios';

export interface Post {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export interface PaginationResponse<T> {
  items: T[];
  itemsCount: number;
  maxPage: null;
  page: null;
  total: number;
}

export type GetPostsResponse = AxiosResponse<PaginationResponse<Post>>;

// export type PostPostsResponse = AxiosResponse<{
//   message: string;
//   objectId: number;
//   statusCode: number;
// }>;
