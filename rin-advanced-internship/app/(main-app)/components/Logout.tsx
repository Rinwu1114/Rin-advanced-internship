"use client";

import { useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../../redux/slices/authState";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import type { AppDispatch } from "@/app/redux/store";
import { auth } from "@/app/firebase/init";
import { openPopUp } from "@/app/redux/slices/loginSlice";

export default function LogoutButton() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.AuthState.user);

  const handleLogout = async () => {
    await signOut(auth);
    
    dispatch(logout());
  };

  const handleLoginPopup = () => {
    dispatch(openPopUp());
  };

  return user ? (
    <div
      className="link__wrapper flex items-center h-14
                    mb-2 hover:bg-gray-100 transition-colors duration-150 ease
                    cursor-pointer"
      onClick={handleLogout}
    >
      <div className="link__line h-full w-[5px] mr-4"></div>
      <div
        className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
      >
        <FiLogOut className="w-6 h-6 text-[#032b41]" />
      </div>
      <div className="sidebar__link--text text-[#032b41]">Logout</div>
    </div>
  ) : (
    <div
      className="link__wrapper flex items-center h-14
                    mb-2 hover:bg-gray-100 transition-colors duration-150 ease
                    cursor-pointer"
      onClick={handleLoginPopup}
    >
      <div className="link__line h-full w-[5px] mr-4"></div>
      <div
        className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
      >
        <FiLogOut className="w-6 h-6 text-[#032b41]" />
      </div>
      <div className="sidebar__link--text text-[#032b41]">Login</div>
    </div>
  ); 
}
