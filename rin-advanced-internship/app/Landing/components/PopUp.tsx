'use client';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { closePopUp } from "@/app/redux/slices/loginSlice";
import { RootState } from "../../redux/store";
import { HiOutlineXMark } from "react-icons/hi2";
import Signup from "./Signup";
import Login from "./Login";

export default function PopUp() {
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.loginPopUp.isOpen);
  const user = useSelector((state: RootState) => state.AuthState.user);
  const modeSwitch = useSelector((state: RootState) => state.loginPopUp.mode);
  const mode = modeSwitch;
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      router.push('/for-you');
    } }, [user, router]);
  
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
        <div className="wrapper flex relative flex-col w-full z-30">
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
                  className="pt-12 px-8 pb-2 auth__content"
                  onClick={handlePopUpClick}
                >
{ mode === 'login' ? (<Login /> ) : (<Signup />)}
                  <HiOutlineXMark
                    onClick={() => dispatch(closePopUp())}
                    className="cursor-pointer
                                h-8 w-8 fill-[#000000] opacity-100 hover:fill-slate-800 transition duration-150 ease
                                absolute top-3 right-3 flex"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
