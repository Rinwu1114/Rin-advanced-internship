"use client";
import { makeStore } from "@/app/redux/store";
import { useSelector } from "react-redux";

export default function Summary({ playerInfo }: { playerInfo: any }) {
  type StoreState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
  const active = useSelector(
    (state: StoreState) => state.ActiveSize.activeSize
  );

  const handleFontSize = () => {
    if (active === "sm") return "text-base";
    if (active === "md") return "text-lg";
    if (active === "lg") return "text-[22px]";
    if (active === "xl") return "text-[26px]";
  };

  return (
    <>
      <div className="summary p-6 pb-8 max-w-[800px] mx-auto h-[calc(100vh-160px)]">
        <div className="summary__title text-[#032b41] md:text-2xl text-xl mb-8 pb-4 leading-[1.5] border-b border-1px border-[#e1e7ea] font-bold">
          {playerInfo.title}
        </div>
        <div
          className={`summary__text whitespace-pre-line leading-[1.4] text-[#032b41] pb-7 md:text-base text-sm
                ${handleFontSize()}`}
        >
          {playerInfo.summary}
        </div>
      </div>
    </>
  );
}
