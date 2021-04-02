import { openStdin } from 'node:process';
import React from 'react';
import useSWR, { cache, trigger } from 'swr';
import { PaginationResponse } from '../../api/hotels/types';
import { getPosts, addPost, deletePost, editPost, getLimitedPosts } from '../../api/posts';

export const usePosts = () => {
  const { data, error, mutate } = useSWR('/posts', () => getPosts().then(r => r.data));
  console.log(data);

  const addNewPost = async (post: any) => {
    const res = await addPost(post);
    const cached: any = cache.get('/posts');

    mutate([...cached, { ...post, id: res.data.id }], false);
    console.log(res);
  };

  const removePost = async (id: number) => {
    const res = await deletePost(id);
    const cached: any = cache.get('/posts');

    mutate(
      cached.filter((post: any) => post.id !== id),
      false
    );
    console.log({ res });
    alert(`Post with id: ${id} is deleted`);
  };

  const changePost = async (id: number, post: any) => {
    const res = await editPost(id, post);
    const cached: any = cache.get('/posts');
    const index = cached.findIndex((elem: any) => elem.id === id);

    cached[index].title = post.title;
    cached[index].body = post.body;

    mutate([...cached], false);

    console.log(res.data);
    alert('Post edited');
  };

  const viewPostLimits = async (limit: number, page: number) => {
    const res = await getLimitedPosts(limit, page);
    const cached: any = cache.get('/posts');

    mutate([...cached], false);

    console.log(res);
  };

  return {
    data,
    loading: !data && !error,
    addNewPost,
    removePost,
    changePost,
    viewPostLimits
  };
};
