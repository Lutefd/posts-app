import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Posts.module.css';

function Posts() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        `https://posts-app-production.up.railway.app/posts?page=${page}`
      );
      const resData = await response.json();
      if (resData.posts !== undefined) {
        setPosts(resData.posts);
        setTotalPages(resData.totalPages);
        console.log(totalPages);
      } else {
        setPosts([]);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [page]);
  return (
    <>
      <Outlet />
      <main className={classes.container}>
        <PostsList page={page} posts={posts} isLoading={isLoading} />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
          isLoading={isLoading}
        />
      </main>
    </>
  );
}

export default Posts;
