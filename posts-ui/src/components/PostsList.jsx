import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({ posts }) {
  return (
    <>
      {posts.length > 0 && (
        <div className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </div>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Não existem recados no momento.</h2>
          <p>Comece a adicionar alguns!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
