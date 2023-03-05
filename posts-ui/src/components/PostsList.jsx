import { useLoaderData } from 'react-router-dom';

import Post from './Post';

import classes from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
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
