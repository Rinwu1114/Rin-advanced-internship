"use client";

import { useSelector, useDispatch } from "react-redux";
import { closePopUp } from "@/app/redux/slices/loginSlice";
import { RootState } from "../../redux/store";
import { HiOutlineXMark } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const isOpen = useSelector((state: RootState) => state.loginPopUp.isOpen);
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    dispatch(closePopUp());
  };

  const handlePopUpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(closePopUp());
    }
  };

  if (!isOpen) return null;
  else
    return (
      <section id="login">
        <div className="wrapper flex relative flex-col w-full">
          <div
            className="sidebar__overlay fixed top-0 left-0 w-full h-full z-10
          "
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={handleOverlayClick}
          >
            <div
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center
                flex-col bg-[rgba(0,0,0,0.75)] z-20 auth__wrapper"
            >
              <div className="max-w-100 rounded-lg bg-neutral-50 relative shadow-[0_0_10px_rgba(0,0,0,0.2)] w-full  auth">
                <div
                  className="pt-12 px-8 pb-6 auth__content"
                  onClick={handlePopUpClick}
                >
                  <div className="auth__title text-center mb-6 font-bold text-xl text-[#032b41]">
                    Login to Summarist
                  </div>
                  <button
                    className="guest__btn--wrapper relative flex bg-[#3a579d] hover:bg-[#25396b]
                    transition-colors duration-150  text-white items-center justify-center w-full h-10
                    min-w-[180px] rounded-md"
                  onClick={() => dispatch(closePopUp())}>
                    <figure className="guest__icon flex items-center justify-center
                    w-9 h-9 rounded-sm absolute left-0.5">
                      <MdPerson className="w-8 h-8"/>
                    </figure>
                    <div>Login as a Guest</div>
                  </button>
                  <div className="auth__seperator flex items-center my-4
                  before:h-[1px] before:bg-[#bac8ce] before:grow before:content-[''] before:block 
                    after:h-[1px] after:bg-[#bac8ce] after:grow after:content-[''] after:block">
                    <span className="auth__seperator--text mx-6 text-sm font-medium">or</span>
                  </div>
                  <button className="google__btn--wrapper relative flex bg-[#4285f4] hover:bg-[#3367d6]
                    transition-colors duration-150  text-white items-center justify-center w-full h-10
                    min-w-[180px] rounded-md">
                    <figure className="google__icon flex items-center justify-center
                    w-9 h-9 rounded-sm absolute left-0.5 bg-white"><FcGoogle className="w-7 h-7"/></figure>
                    <div>Login with Google</div>
                  </button>
                  <div className="auth__seperator flex items-center my-4
                  before:h-[1px] before:bg-[#bac8ce] before:grow before:content-[''] before:block 
                    after:h-[1px] after:bg-[#bac8ce] after:grow after:content-[''] after:block">
                    <span className="auth__seperator--text mx-6 text-sm font-medium">or</span>
                  </div>
                  <form className="auth__main--form flex flex-col gap-4">
                    <input
                      className="auth__main--input h-10 px-3 rounded-sm border-[2px] border-[#bac8ce]
                      text-[#394547] focus:outline-none focus:border-[#2bd97c] text-sm"
                      type="email"
                      placeholder="Email Address"
                    />
                    <input
                      className="auth__main--input h-10 px-3 rounded-sm border-[2px] border-[#bac8ce]
                      text-[#394547] focus:outline-none focus:border-[#2bd97c] text-sm"
                      type="password"
                      placeholder="Password"
                    />
                    <button className="btn flex justify-center">
                      <span >Login</span>
                    </button>
                  </form>
                </div>
                <div className="auth__forgot--password text-center text-[#116be9] font-light text-sm
                cursor-pointer mx-auto mb-4 ">
                  Forgot your password?
                </div>
                <button className="auth__switch--btn flex justify-center items-center text-center h-10 
                w-full bg-none rounded-lg font-light text-[#116be9] cursor-pointer hover:bg-gray-100
                transition-colors duration-150">
                  Don't have an account?
                </button>
                <div
                  className="absolute top-3 right-3 flex cursor-pointer 
                         auth__close--btn"
                >
                  <HiOutlineXMark
                    onClick={() => dispatch(closePopUp())}
                    className="cursor-pointer
                                h-8 w-8 fill-[#000000] opacity-100 hover:fill-slate-800 transition duration-150 ease"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
