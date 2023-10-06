import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from './component-pages/Single';
import HomePage from './component-pages/HomePage';
import ErrorPage from './component-pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/artworks/:slug",
    element: <Single />,
  },
  {
    path: "/exhibitions/:slug",
    element: <Single />,
  }
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);

