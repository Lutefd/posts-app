import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({ posts, isLoading }) {
  return (
    <>
      {!isLoading && posts.length > 0 && (
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
      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Não existem recados no momento.</h2>
          <p>Comece a adicionar alguns!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Carregando...</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
