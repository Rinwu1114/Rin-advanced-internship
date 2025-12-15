"use client";
import { useRouter } from "next/navigation";
import { LuBookOpenText } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";

export default function BookButtons({ bookId }: { bookId: string }) {
    const router = useRouter();
    return (
        <div className="flex gap-4 mb-6">
            <button className="btns flex items-center justify-center w-36 h-12 bg-[#032b41] text-[#fff] rounded-sm cursor-pointer gap-2 transition-opacity duration-150 hover:opacity-80" 
            onClick={() => router.push(`/player/${bookId}`)}>
                <div className="read__icon flex"><LuBookOpenText className="w-6 h-6"/></div>
                <div className="read__text">Read</div>
            </button>
            <button className="audio__btn flex items-center justify-center w-36 h-12 bg-[#032b41] text-[#fff] rounded-sm cursor-pointer gap-2 transition-opacity duration-150 hover:opacity-80" 
            onClick={() => router.push(`/player/${bookId}`)}>
                <div className="audio__icon flex"><IoMicOutline className="w-6 h-6"/></div>
                <div className="audio__text">Listen</div>
            </button>
        </div>
    );
}
