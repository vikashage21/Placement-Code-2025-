import React, { useRef, useState } from "react";
import Headers from "./Header.jsx";
import { netflixBackground } from "../constant/const.js";
import { checkValidate } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/appSlice.js";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  handling the signup and signin features
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const handelSignIN = () => {
    setIsSignIn(!isSignIn);
  };

  //    creating useRef for input filed
  const email = useRef(null);
  const password = useRef(null);

  //  handle the form input
  const handleInput = () => {
    const isValid = checkValidate(email.current.value, password.current.value);
    setMessage(isValid);

    if (isValid) return;
    //  signup / signin login here - firebase

    if (!isSignIn) {
      // login of signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //   add user inside redux store

          dispatch(
            addUser({
              userEmail: user.email,
              userUid: user.uid,
           
            })
          );

          //  user created
          console.log("user created :", user);

          //   navigate to the browse page
          if (user) {
            // updating the user details
            updateProfile(auth.currentUser, {
              displayName: "vikash sharma",
              photoURL:
                "https://i.pinimg.com/originals/21/d5/8d/21d58def55d8b9276583ca8709361986.jpg",
            })
              .then(() => {
                dispatch(
                  addUser({
                    userEmail: auth.currentUser.email,
                    userUid: auth.currentUser.uid,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred

                console.log(error)
                // ...
              });
            navigate("/browse");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + " " + errorCode);
          // ..
        });
    } else {
      // logic of signIn

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            addUser({
              userEmail: auth.currentUser.email,
              userUid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              photoURL: auth.currentUser.photoURL,
            })
          );
          navigate("/browse");
          console.log("user logged in :", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Headers />
      <div className="absolute w-full  ">
        <img className="w-full" src={netflixBackground} alt="" />
      </div>

      {/*  creating form here */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black opacity-90 text-white  h-10/12 w-4/12 mx-auto top-0 my-20 left-5/12  rounded-sm flex flex-col px-5 py-5 "
      >
        <h1 className="text-white font-bold text-xl my-2 ">
          {" "}
          {isSignIn ? "sign in" : "sign up"}{" "}
        </h1>

        {!isSignIn && (
          <input
            className="py-2 my-2 w-full  px-2 pt-4  bg-gray-800 text-white outline-none"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          className="py-2 my-2 w-full px-2 pt-4  bg-gray-800 text-white outline-none"
          ref={email}
          type="text"
          placeholder="Enter your Email"
        />
        <input
          className="py-2 my-2 w-full rounded-sm px-2  bg-gray-800 text-white outline-none pt-4"
          ref={password}
          type="password"
          placeholder="Enter Your Password"
        />
        <p className="text-red">{message} </p>
        <button
          className="p-2 mt-5 bg-red-800 rounded-sm mb-5 text-slate-50"
          onClick={handleInput}
        >
          {" "}
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handelSignIN}>
          {" "}
          {isSignIn
            ? "Creating a new Account : Signup !   "
            : "Already have an Account : login "}
        </p>
      </form>
    </div>
  );
};

export default Login;
