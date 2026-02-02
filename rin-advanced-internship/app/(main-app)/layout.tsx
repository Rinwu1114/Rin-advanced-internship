import Sidebar from "./components/Sidebar";
import Search from "./components/SearchComponents/Search";
import PopUp from "../Landing/components/PopUp/PopUp";
import AuthListener from "./components/AuthListener";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthListener />
      <PopUp />
      <div className="flex min-h-screen">
        <div className="transition-[width] duration-400 ease-in-out
          w-0 md:w-[200px]
          shrink-0
          h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <Search />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
