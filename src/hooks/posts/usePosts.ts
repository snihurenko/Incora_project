import React, { useCallback, useState } from 'react';
import useSWR, { cache } from 'swr';
import { getPosts, addPost, deletePost, editPost, getLimitedPosts, Post } from '../../api/posts';

export const usePosts = () => {
  const { data, error, mutate } = useSWR('/posts', () => getPosts().then(r => r.data));
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data);

  const viewPostLimits = useCallback(async (limit: number, page: number) => {
    const res = await getLimitedPosts(limit, page);
    const cached: Post[] = cache.get('/posts');

    const postsPerPage = () => {
      const startPage = (page - 1) * limit;
      const endPage = startPage + limit;
      return cached.slice(startPage, endPage);
    };

    const mutated = postsPerPage();
    mutate([...mutated], false);
    console.log(mutated);
    console.log(res);
  }, []);

  const addNewPost = useCallback(async (post: Post) => {
    const res = await addPost(post);
    const cached: Post[] = cache.get('/posts');

    mutate([...cached, { ...post, id: res.data.id }], false);
    console.log(res);
  }, []);

  const removePost = useCallback(async (id: number) => {
    const res = await deletePost(id);
    const cached: Post[] = cache.get('/posts');

    mutate(
      cached.filter((post: any) => post.id !== id),
      false
    );
    console.log({ res });
    alert(`Post with id: ${id} is deleted`);
  }, []);

  const changePost = useCallback(async (id: number, post: Post) => {
    const res = await editPost(id, post);
    const cached: Post[] = cache.get('/posts');
    const posts = [...cached];

    const changed = posts.map(elem => (elem.id === id ? post : elem));

    mutate([...changed], false);

    console.log(res.data);
    alert('Post edited');
  }, []);

  return {
    data,
    loading: !data && !error,
    addNewPost,
    removePost,
    changePost,
    viewPostLimits,
    changePage: setCurrentPage,
    currentPage
  };
};
