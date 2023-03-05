import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/Posts';
import NewPost from './components/NewPost';
import './index.css';
import Layout from './routes/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/create', element: <NewPost /> },
      { path: '/:id', element: <App /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
