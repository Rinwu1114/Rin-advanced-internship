'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function BookPill () {
    const user = useSelector((state: RootState) => state.AuthState.user);
    
    return(
        <>
        {user?.plan === 'Basic' || user?.plan === undefined ?  <div className="book__pill bg-[#032b41] h-[18px] px-2 absolute
            top-0 right-0 text-[#fff]
            text-[10px] flex items-center rounded-3xl">
                Premium</div> : null }
       </>
    )
}