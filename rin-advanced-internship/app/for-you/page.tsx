import Sidebar from "../components/Sidebar";
import Search from "@/app/components/SearchComponents/Search";
import Selected from "./components/Selected";
import Recommended from "./components/Recommended";
import Suggested from "./components/Suggested";
import PopUp from "../Landing/components/PopUp/PopUp";
import BookCardSkeleton from "../components/LoadingComponents/BookCardSkeleton";
import Loading from "./loading"
import { Suspense } from "react";


export default function forYou(){

  return (
    <>
      <PopUp />
      <div className="grid grid-cols-[200px_minmax(0,1fr)]">
        <Sidebar />
        <div>
          <Search />
          <div className="row">
            <div className="container">
              <div className="for-you__wrapper">
                <Suspense fallback = {<Loading />} >
                <Selected />
                <Recommended/>
                <Suggested />
                </Suspense>
                <BookCardSkeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
