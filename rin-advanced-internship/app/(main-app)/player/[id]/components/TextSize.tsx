"use client";
import { IoTextOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { setActiveSize } from "@/app/redux/slices/activeSize";
import { useDispatch, useSelector } from "react-redux";
import { makeStore } from "@/app/redux/store";

export default function textSize() {
  const dispatch = useDispatch();

  type StoreState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
  const active = useSelector(
    (state: StoreState) => state.ActiveSize.activeSize
  );

  const currentPath = usePathname();
  const specificLink = "/player/";
  const isActive = currentPath.startsWith(specificLink);
  return (
    <>
      {isActive && (
        <>
          <div
            onClick={() => dispatch(setActiveSize("sm"))}
            className={
              active === "sm"
                ? " flex items-center justify-center w-8 h-8 border-b-[3px] border-b-[#2bd97c]"
                : "flex items-center justify-center w-8 h-8"
            }
          >
            <IoTextOutline className="w-5 h-5 text-[#032b41]" />
          </div>
          <div
            onClick={() => dispatch(setActiveSize("md"))}
            className={
              active === "md"
                ? " flex items-center justify-center w-8 h-8 border-b-[3px] border-b-[#2bd97c]"
                : "flex items-center justify-center w-8 h-8"
            }
          >
            <IoTextOutline className="w-6 h-6 text-[#032b41]" />
          </div>
          <div
            onClick={() => dispatch(setActiveSize("lg"))}
            className={
              active === "lg"
                ? " flex items-center justify-center w-8 h-8 border-b-[3px] border-b-[#2bd97c]"
                : "flex items-center justify-center w-8 h-8"
            }
          >
            <IoTextOutline className="w-7 h-7 text-[#032b41]" />
          </div>
          <div
            onClick={() => dispatch(setActiveSize("xl"))}
            className={
              active === "xl"
                ? " flex items-center justify-center w-8 h-8 border-b-[3px] border-b-[#2bd97c]"
                : "flex items-center justify-center w-8 h-8"
            }
          >
            <IoTextOutline className="w-8 h-8 text-[#032b41]" />
          </div>
        </>
      )}
    </>
  );
}
