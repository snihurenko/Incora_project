import React from 'react';
import { Post } from '../../api/posts';
import { usePosts } from '../../hooks/posts/usePosts';

export const Posts = () => {
  const { data, addNewPost, removePost, changePost, viewPostLimits } = usePosts();

  const createPost = () => {
    addNewPost({
      userId: 1,
      title: 'new post',
      body: 'newwwww newwww'
    });
  };

  const remove = (id: number) => {
    removePost(id);
  };

  const edit = (id: number, post: Post) => {
    changePost(id, post);
  };

  const limitPosts = () => {
    viewPostLimits(5, 2);
  };

  return (
    <div>
      <p>JSON Placeholder</p>
      <button onClick={createPost}>Create post</button>
      <button onClick={limitPosts}>Show only 5 posts per page</button>

      {data ? (
        data.map((elem: any) => {
          return (
            <div key={elem.id}>
              <p>id: {elem.id} </p>
              <p> user id: {elem.userId}</p>
              <p>title: {elem.title}</p>
              <button onClick={() => remove(elem.id)}>Delete post</button>

              <button
                onClick={() =>
                  edit(elem.id, { id: elem.id, userId: 1, title: 'edited post', body: 'edited edited' })
                }
              >
                Edit post
              </button>
              <hr />
            </div>
          );
        })
      ) : (
        <h2>Loading data</h2>
      )}
    </div>
  );
};
