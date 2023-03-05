import React from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NewPost, { postMessage as post } from './routes/NewPost';
import './index.css';
import Layout from './routes/Layout';
import Posts, { loader as postsLoader } from './routes/Posts';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create', element: <NewPost />, action: post },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
