"use client";

import { useDispatch } from "react-redux";
import { openPopUp } from "@/app/redux/slices/loginSlice";

export default function loginButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="className= mx-auto md:m-0 btn home__cta--btn"
      onClick={() => dispatch(openPopUp())}
    >
      Login
    </button>
  );
}
