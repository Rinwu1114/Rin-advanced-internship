"use client";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi";
import { RiBallPenLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "@/app/redux/slices/activeSlice";
import { makeStore } from "@/app/redux/store";
import TextSize from "../player/[id]/components/TextSize";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const dispatch = useDispatch();

  type StoreState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
  const active = useSelector((state: StoreState) => state.ActiveTab.activeTab);
  const isPlayerPage = usePathname().startsWith('/player/')
  
  return (
    <div className="sidebar__overlay">
      <nav
        className="sidebar bg-[#f7faf9] w-50 min-w-50 fixed top-0 left-0
        h-full z-20"
      >
        <div
          className="sidebar__logo flex items-center justify-center
            h-15 pt-4 max-w-40 mx-auto"
        >
          <Image src={logo} alt="Summarist Logo" className="w-full h-10" />
        </div>
        <div
          className={`sidebar__wrapper flex flex-col justify-between
            ${isPlayerPage ? "h-[calc(100vh-140px)]" : "h-[calc(100vh-60px)]"} pb-6 overflow-y-auto`}
        >
          <div className="sidebar__top mt-10">
            <Link
              href={"/for-you"}
              className="link__wrapper flex items-center h-14
                    mb-2 hover:bg-gray-100 transition-colors duration-150 ease"
              onClick={() => dispatch(setActiveTab("for-you"))}
            >
              <div
                className={
                  active === "for-you"
                    ? "link__line h-full w-[5px] mr-4 bg-[#2bd97c]"
                    : "h-full w-[5px] mr-4"
                }
              ></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2 "
              >
                <HiOutlineHome className="w-6 h-6 stroke-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">For You</div>
            </Link>
            <Link
              href={"/my-library"}
              className="link__wrapper flex items-center h-14
                    mb-2 hover:bg-gray-100 transition-colors duration-150 ease"
              onClick={() => dispatch(setActiveTab("library"))}
            >
              <div
                className={
                  active === "library"
                    ? "link__line h-full w-[5px] mr-4 bg-[#2bd97c]"
                    : "h-full w-[5px] mr-4"
                }
              ></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
              >
                <HiOutlineBookmark className="w-6 h-6 stroke-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">
                My Library
              </div>
            </Link>
            <div
              className="link__wrapper flex items-center h-14
                    mb-2 cursor-not-allowed"
            >
              <div className="link__line h-full w-[5px] mr-4"></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
              >
                <RiBallPenLine className="w-6 h-6 text-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">
                Highlights
              </div>
            </div>
            <div
              className="link__wrapper flex items-center h-14
                    mb-2 cursor-not-allowed"
            >
              <div className="link__line h-full w-[5px] mr-4"></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
              >
                <BiSearch className="w-6 h-6 text-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">Search</div>
            </div>
          <div
            className="link__wrapper flex items-center h-14
            mb-2 cursor-pointer"
            >
            <div
              className="sidebar__font--wrapper flex ml-6 gap-2"
              >
              <TextSize />
            </div>
          </div>
              </div>
          <div className="sidebar__bottom">
            <Link
              href={"/settings"}
              className="link__wrapper flex items-center h-14
                    mb-2 hover:bg-gray-100 transition-colors duration-150 ease"
              onClick={() => dispatch(setActiveTab("settings"))}
            >
              <div
                className={
                  active === "settings"
                    ? "link__line h-full w-[5px] mr-4 bg-[#2bd97c]"
                    : "h-full w-[5px] mr-4"
                }
              ></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
              >
                <CiSettings className="w-6 h-6 text-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">Settings</div>
            </Link>
            <div
              className="link__wrapper flex items-center h-14
                    mb-2 cursor-not-allowed"
            >
              <div className="link__line h-full w-[5px] mr-4"></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
              >
                <IoIosHelpCircleOutline className="w-6 h-6 text-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">
                Help & Support
              </div>
            </div>
            <div
              className="link__wrapper flex items-center h-14
                    mb-2 hover:bg-gray-100 transition-colors duration-150 ease"
            >
              <div className="link__line h-full w-[5px] mr-4"></div>
              <div
                className="sidebar__icon--wrapper flex items-center justify-center
                    mr-2"
              >
                <FiLogOut className="w-6 h-6 text-[#032b41]" />
              </div>
              <div className="sidebar__link--text text-[#032b41]">Logout</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
