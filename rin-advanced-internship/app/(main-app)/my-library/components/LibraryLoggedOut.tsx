"use client";

import { useDispatch } from "react-redux";
import { openPopUp } from "@/app/redux/slices/loginSlice";
import Image from "next/image";
import loginImage from "@/public/assets/login.png";

export default function LibraryLoggedOut() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="setting__wrapper max-w-[480px] flex flex-col items-center
                mx-auto"
      >
        <Image src={loginImage} alt="Please Login Image" />
        <div
          className="setting__text text-[#032b41] font-bold
                    text-2xl text-center mb-4"
        >
          Log in to your account to see your library.
        </div>
        <div
          className="btn max-w-[100px] justify-center cursor-pointer"
          onClick={() => dispatch(openPopUp())}
        >
          Login
        </div>
      </div>
    </>
  );
}
