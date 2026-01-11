"use client";
import SavedBooks from "./components/SavedBooks";
import FinishedBooks from "./components/FinishedBooks";
import LibraryLoggedOut from "./components/LibraryLoggedOut";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import PopUp from "../Landing/components/PopUp/PopUp";
import Search from "../components/Search";

export default function MyLibrary() {
const user = useSelector((state: RootState) => state.AuthState.user);

  return (
    <>
      <PopUp />
      <div className="grid grid-cols-[200px_minmax(0,1fr)]">
        <Sidebar />
        <div>
          <Search />
          <div className="row">
            <div className="container">
              {user ? (
                <>
                  <SavedBooks />
                  <FinishedBooks />
                </>
              ) : (
                <LibraryLoggedOut />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
