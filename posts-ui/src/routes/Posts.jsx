import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import { useState, useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import classes from './Posts.module.css';

function Posts() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/posts?page=${page}`);
      const resData = await response.json();
      if (resData.posts !== undefined) {
        setPosts(resData.posts);
        setTotalPages(resData.totalPages);
        console.log(totalPages);
      } else {
        setPosts([]);
      }
    }

    fetchData();
  }, [page]);
  return (
    <>
      <Outlet />
      <main className={classes.container}>
        <PostsList page={page} posts={posts} />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </main>
    </>
  );
}

export default Posts;
