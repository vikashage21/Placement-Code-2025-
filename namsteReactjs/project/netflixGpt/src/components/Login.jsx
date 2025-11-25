import React, { useState } from "react";
import Headers from "./Header.jsx";
import { netflixBackground } from "../constant/const.js";

const Login = () => {
  //  handling the signup and signin features
  const [isSignIn, setIsSignIn] = useState(true);

  const handelSignIN = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Headers />
      <div className="absolute w-full  ">
        <img className="w-full" src={netflixBackground} alt="" />
      </div>

      {/*  creating form here */}
      <form className="absolute bg-black opacity-90 text-white  h-10/12 w-4/12 mx-auto top-0 my-20 left-5/12  rounded-sm flex flex-col px-5 py-5 ">
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
          type="text"
          placeholder="Enter your Email"
        />
        <input
          className="py-2 my-2 w-full rounded-sm px-2  bg-gray-800 text-white outline-none pt-4"
          type="password"
          placeholder="Enter Your Password"
        />

        <button className="p-2 mt-5 bg-red-800 rounded-sm mb-5 text-slate-50">
          {" "}
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handelSignIN}>
          {" "}
          {isSignIn ? "Creating a new Account : Signup !   " : "Already have an Account : login "}
        </p>
      </form>
    </div>
  );
};

export default Login;
