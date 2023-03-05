import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
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
