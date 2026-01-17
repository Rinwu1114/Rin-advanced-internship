'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import LoggedInSettings from "./components/LoggedinSettings";
import LoggedOut from "./components/LoggedOut";
import PopUp from "../Landing/components/PopUp/PopUp";
import Sidebar from "../components/Sidebar";
import Search from "@/app/components/SearchComponents/Search";

export default function SettingsPage() {

const user = useSelector((state: RootState) => state.AuthState.user);

  return (
    <div className="grid grid-cols-[200px_minmax(0,1fr)]">
      <PopUp />
      <Sidebar />
      <div>
        <Search />
        <div className="row">
          <div className="container">
            { user ? <LoggedInSettings /> : <LoggedOut />}
          </div>
        </div>
      </div>
    </div>
  );
}
