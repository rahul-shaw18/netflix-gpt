import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <header className="flex justify-between items-center">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        {user && (
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://pbs.twimg.com/media/DN1OYIFX0AAbOMe?format=jpg&name=small"
              }
              alt="account logo"
              srcset=""
            />

            <p>{user.displayName}</p>

            <button
              className=" text-white px-4 py-2 rounded-lg"
              onClick={handleSingOut}
            >
              Sign out
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
