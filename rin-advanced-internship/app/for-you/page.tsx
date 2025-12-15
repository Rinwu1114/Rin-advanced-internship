import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Selected from "./components/Selected";
import Recommended from "./components/Recommended";
import Suggested from "./components/Suggested";

export default function forYou() {
  return (
    <div className="grid grid-cols-[200px_minmax(0,1fr)]">
      <Sidebar />
      <div>
        <Search />
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <Selected />
              <Recommended />
              <Suggested />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
