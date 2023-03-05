import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/Posts';
import NewPost, { postMessage as post } from './routes/NewPost';
import './index.css';
import Layout from './routes/Layout';
import Posts, { loader as postsLoader } from './routes/Posts';
import PostDetails from './routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [
          { path: '/create', element: <NewPost />, action: post },
          { path: '/:id', element: <PostDetails /> },
        ],
        loader: postsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
