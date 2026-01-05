"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from '@/app/redux/store';
import { switchMode } from "@/app/redux/slices/loginSlice";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { registerUser } from "@/app/redux/thunks/authThunk";

export default function Signup() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const switchToLogin = () => {
    dispatch(switchMode("login"));
  };
   const handleRegister = () => {
    if (email && password) {
      dispatch(registerUser({ email, password }));
    }
  }

  return (
    <>
      <div className="auth__title text-center mb-6 font-bold text-xl text-[#032b41]">
        Sign up to Summarist
      </div>
      <button
        className="google__btn--wrapper relative flex bg-[#4285f4] hover:bg-[#3367d6]
                        transition-colors duration-150  text-white items-center justify-center w-full h-10
                        min-w-[180px] rounded-md"
      >
        <figure
          className="google__icon flex items-center justify-center
                        w-9 h-9 rounded-sm absolute left-0.5 bg-white"
        >
          <FcGoogle className="w-7 h-7" />
        </figure>
        <div>Sign up with Google</div>
      </button>
      <div
        className="auth__seperator flex items-center my-4
                      before:h-[1px] before:bg-[#bac8ce] before:grow before:content-[''] before:block 
                        after:h-[1px] after:bg-[#bac8ce] after:grow after:content-[''] after:block"
      >
        <span className="auth__seperator--text mx-6 text-sm font-medium">
          or
        </span>
      </div>
      <form className="auth__main--form flex flex-col gap-4">
        <input
          className="auth__main--input h-10 px-3 rounded-sm border-[2px] border-[#bac8ce]
                          text-[#394547] focus:outline-none focus:border-[#2bd97c] text-sm"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth__main--input h-10 px-3 rounded-sm border-[2px] border-[#bac8ce]
                          text-[#394547] focus:outline-none focus:border-[#2bd97c] text-sm"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn flex justify-center"
        onClick={handleRegister}>
          <span>Sign up</span>
        </button>
      </form>

      <button
        className="auth__switch--btn flex justify-center items-center text-center h-10 
                    w-full bg-none rounded-lg font-light text-[#116be9] cursor-pointer hover:bg-gray-100
                    transition-colors duration-150
                    mt-4"
        onClick={switchToLogin}
      >
        Already have an account?
      </button>
      <div
        className="absolute top-3 right-3 flex cursor-pointer 
                             auth__close--btn"
      ></div>
    </>
  );
}
