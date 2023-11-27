import React from "react";

import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from './Login';

const Body = () => {
  const appRoute = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    // { path: "/", element: <Body /> },
    // { path: "/", element: <Body /> },
    // { path: "/", element: <Body /> },
    // { path: "/", element: <Body /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
