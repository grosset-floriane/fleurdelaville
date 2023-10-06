import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from './components/Single';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';

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

