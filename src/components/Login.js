import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggeSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="main background"
        />
      </div>
      <form
        action=""
        onSubmit={handleSubmitForm}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl  py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full outline-none bg-gray-400 rounded-lg placeholder:text-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 m-2 w-full outline-none bg-gray-400 rounded-lg placeholder:text-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full outline-none bg-gray-400 rounded-lg placeholder:text-gray-600"
        />
        <button className="p-4 m-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="p-4 m-2 w-full cursor-pointer" onClick={toggeSignInForm}>
          {isSignInForm
            ? "New to Netfix? Sign Up Now"
            : "Already a user Sing in now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
