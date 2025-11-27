import React from "react";
import { netflixLogo } from "../constant/const";
import { useDispatch } from "react-redux";

import { removeUser } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <div className="absolute top-0 left-0 w-full px-6 py-3 z-10 
                bg-gradient-to-b from-black via-transparent to-transparent
                flex items-center justify-between">

  {/* Logo */}
  <img src={netflixLogo} alt="logo" className="w-36" />

  {/* User Section */}
  {user && (
    <div className="flex items-center gap-4">
      <img
        src={user.photoURL}
        alt="userLogo"
        className="w-10 h-10 rounded-sm object-cover"
      />

      <button
        onClick={handleSignout}
        className="text-black text-sm hover:underline cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  )}
</div>

  );
};

export default Header;
