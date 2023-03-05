import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch(
    `https://posts-app-production.up.railway.app/posts/`
  );
  const resData = await response.json();
  if (resData.posts !== undefined) {
    return resData.posts;
  } else {
    return [];
  }
}
