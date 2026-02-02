"use client";
import { useSelector, useDispatch } from "react-redux";
import { makeStore } from "@/app/redux/store";
import { toggleMenu } from "@/app/redux/slices/menuSlice";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const dispatch = useDispatch();
  type StoreState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
  const menuOpen = useSelector((state: StoreState) => state.MenuState.menuOpen);
  return (
    <>
      <div
        className={`fixed inset-0 bg-[#3a4649] z-20 transition-opacity duration-400 ${
          menuOpen
            ? "opacity-65 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => dispatch(toggleMenu())}
      ></div>
        <div
         className={`fixed inset-y-0 left-0 z-20 w-[80%] bg-[#f7faf9] transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }
           md:-translate-x-full`}
        >
          <SidebarContent />
        </div>

      <div
         className="z-20 md:flex md:flex-col  top-0 
         h-screen fixed inset-y-0 left-0 w-[200px] bg-[#f7faf9]
         w-0 md:w-[200px]
         -translate-x-full
         md:translate-x-0
         transition-all duration-400 ease-in-out"
      >
        <SidebarContent />
      </div>
    </>
  );
}
