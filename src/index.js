import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from './component-pages/Single';
import Page from './component-pages/Page';
import Archive from './component-pages/Archive';
import HomePage from './component-pages/HomePage';
import ErrorPage from './component-pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Page />,
  },
  {
    path: "/about",
    element: <Page />,
  },
  {
    path: "/works/:slug",
    element: <Single />,
  },
  {
    path: "/works",
    element: <Archive />,
  },
  {
    path: "/exhibitions/:slug",
    element: <Single />,

  },
  {
    path: "/exhibitions",
    element: <Archive />,

  },
  
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);

