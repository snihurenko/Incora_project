import React from 'react';
import { idText, ScriptElementKindModifier } from 'typescript';
//import { registerUser, loginUser } from '../../api/auth';
import { usePosts } from '../../hooks/posts/usePosts';

export const Posts = () => {
  //const { data } = usePosts();

  const { data, addNewPost, removePost, changePost, viewPostLimits } = usePosts();
  // console.log(data);

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

  const edit = (id: number, post: any) => {
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
                onClick={() => edit(elem.id, { userId: 1, title: 'edited post', body: 'edited edited' })}
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
