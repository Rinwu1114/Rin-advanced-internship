"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function BookTitle({ bookInfo }: { bookInfo: any }) {
  const user = useSelector((state: RootState) => state.AuthState.user);

  return (
    <>
      {user?.plan === "Basic" || user?.plan === undefined ? (
        <div className="book__title text-[#032b41] mb-4 font-semibold text-[32px]">
          {bookInfo.title} (Premium)
        </div>
      ) : (
        <div className="book__title text-[#032b41] mb-4 font-semibold text-[32px]">
          {bookInfo.title}
        </div>
      )}
    </>
  );
}
