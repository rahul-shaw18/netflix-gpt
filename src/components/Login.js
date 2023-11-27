import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggeSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? fullName.current.value : ""
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"
          }).then(() => {
            if (user) {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
            }
            navigate("/browse")
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl  py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full outline-none bg-gray-400 rounded-lg placeholder:text-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 m-2 w-full outline-none bg-gray-400 rounded-lg placeholder:text-gray-600"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full outline-none bg-gray-400 rounded-lg placeholder:text-gray-600"
          ref={password}
        />
        {(
          <p className="text-red-500 py-4 m-2 w-full">{errorMessage}</p>
        )}
        <button
          className="p-4 m-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 m-2 w-full cursor-pointer" onClick={toggeSignInForm}>
          {isSignInForm
            ? "New to Netfix? Sign Up Now"
            : "Already a user Sing in now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
