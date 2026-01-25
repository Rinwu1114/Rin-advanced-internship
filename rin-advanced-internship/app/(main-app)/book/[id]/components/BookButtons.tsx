"use client";
import { useRouter } from "next/navigation";
import { LuBookOpenText } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { openPopUp } from "@/app/redux/slices/loginSlice";

export default function BookButtons({ bookInfo }: { bookInfo: any }) {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.AuthState.user);
  const router = useRouter();

  const handleBookButtonClick = () => {
    if (user?.plan === undefined) {
      dispatch(openPopUp());
      return;
    }
    if (user?.plan === "Basic" && bookInfo.subscriptionRequired === true ) {
      router.push(`/choose-plan`);
      return;
    } else {
      {
        router.push(`/player/${bookInfo.id}`);
      }
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <button
        className="btns flex items-center justify-center w-36 h-12 bg-[#032b41] text-[#fff] rounded-sm cursor-pointer gap-2 transition-opacity duration-150 hover:opacity-80"
        onClick={handleBookButtonClick}
      >
        <div className="read__icon flex">
          <LuBookOpenText className="w-6 h-6" />
        </div>
        <div className="read__text">Read</div>
      </button>
      <button
        className="audio__btn flex items-center justify-center w-36 h-12 bg-[#032b41] text-[#fff] rounded-sm cursor-pointer gap-2 transition-opacity duration-150 hover:opacity-80"
        onClick={handleBookButtonClick}
      >
        <div className="audio__icon flex">
          <IoMicOutline className="w-6 h-6" />
        </div>
        <div className="audio__text">Listen</div>
      </button>
    </div>
  );
}
