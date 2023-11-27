import React, { useEffect } from "react";

import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  
  const appRoute = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    // { path: "/", element: <Body /> },
    // { path: "/", element: <Body /> },
    // { path: "/", element: <Body /> },
    // { path: "/", element: <Body /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
