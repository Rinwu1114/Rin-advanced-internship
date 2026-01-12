'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useRouter } from "next/navigation";

export default function LoggedInSettings() {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.AuthState.user);

    return (
        <>
        <div className="settings__title pb-4 text-left border-b border-[#e1e7ea]
        text-[#032b41] text-3xl font-bold mb-8">Settings</div>
        <div className="setting__content flex flex-col
        items-start gap-2 mb-8 border-b border-[#e1e7ea] pb-6">
            <div className="setting__subtitle text-lg font-bold text-[#032b41]">Your Subscription plan</div>
            <div className="setting__text text-[#032b41]">
                { user ? user.plan : null}
                
                </div>  
                { user?.plan === "Basic" ? <button className="btn justify-center max-w-[150px]"
                        onClick={() => router.push(`/choose-plan`)}>
                            Upgrade to Premium
                        </button> : null}
        </div>
        <div className="setting__content flex flex-col
        items-start gap-2 pb-6">
            <div className="setting__subtitle text-lg font-bold text-[#032b41]">Email</div>
            <div className="setting__text text-[#032b41]">{user ? user.email : null}</div>
        </div>
        </>
    )
}