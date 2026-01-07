'use client';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function LoggedInSettings() {
    const user = useSelector((state: RootState) => state.AuthState.user);
    useEffect(() => {
        console.log("User in LoggedInSettings:", user);
        console.log("current Path:", window.location.pathname)
    }, [user])
    return (
        <>
        <div className="settings__title pb-4 text-left border-b border-[#e1e7ea]
        text-[#032b41] text-3xl font-bold mb-8">Settings</div>
        <div className="setting__content flex flex-col
        items-start gap-2 mb-8 border-b border-[#e1e7ea] pb-6">
            <div className="setting__subtitle text-lg font-bold text-[#032b41]">Your Subscription plan</div>
            <div className="setting__text text-[#032b41]">
                { user ? user.plan : null}</div>
        </div>
        <div className="setting__content flex flex-col
        items-start gap-2 pb-6">
            <div className="setting__subtitle text-lg font-bold text-[#032b41]">Email</div>
            <div className="setting__text text-[#032b41]">{user ? user.email : null}</div>
        </div>
        </>
    )
}