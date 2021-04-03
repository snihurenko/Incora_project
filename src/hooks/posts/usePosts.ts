import React from 'react';
import useSWR, { cache } from 'swr';
import { PaginationResponse } from '../../api/hotels/types';
import { getPosts, addPost, deletePost, editPost, getLimitedPosts, Post } from '../../api/posts';

export const usePosts = () => {
  const { data, error, mutate } = useSWR('/posts', () => getPosts().then(r => r.data));
  console.log(data);

  const addNewPost = async (post: Post) => {
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

  const changePost = async (id: number, post: Post) => {
    const res = await editPost(id, post);
    const cached: any = cache.get('/posts');
    const posts = [...cached];

    const changed = posts.map(elem => (elem.id === id ? post : elem));

    mutate([...changed], false);

    console.log(res.data);
    alert('Post edited');
  };

  const viewPostLimits = async (limit: number, page: number) => {
    const res = await getLimitedPosts(limit, page);
    const cached: any = cache.get('/posts');

    const postsPerPage = () => {
      const startPage = (page - 1) * limit;
      const endPage = startPage + limit;
      return cached.slice(startPage, endPage);
    };

    const mutated = postsPerPage();
    mutate([...mutated], false);
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
