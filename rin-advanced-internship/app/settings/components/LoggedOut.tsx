'use client'

import { useDispatch } from "react-redux";
import { openPopUp } from "@/app/redux/slices/loginSlice";
import Image from "next/image";
import loginImage from "@/public/assets/login.png"

export default function LoggedOut() {
    
    const dispatch = useDispatch()

    return (
        <>
         <div className="settings__title pb-4 text-left border-b border-[#e1e7ea]
        text-[#032b41] text-3xl font-bold mb-8">Settings</div>
        <div className="setting__wrapper max-w-[480px] flex flex-col items-center
        mx-auto">
            <Image src={loginImage} alt="Please Login Image"/>
            <div className="setting__text text-[#032b41] font-bold
            text-2xl text-center mb-4">
                Log in to your account to see your details.
            </div>
            <div className="btn max-w-[100px] justify-center cursor-pointer"
            onClick={() => dispatch(openPopUp())}>Login</div>
        </div>
        </>
    )}