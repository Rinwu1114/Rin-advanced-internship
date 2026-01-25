import Sidebar from "./components/Sidebar";
import Search from "./components/SearchComponents/Search";
import PopUp from "../Landing/components/PopUp/PopUp";
import AuthListener from "./components/AuthListener";

export default function AppLayout({ children }: { children: React.ReactNode}){
    return(
       <>
       <AuthListener />
             <PopUp />
             <div className="grid grid-cols-[200px_minmax(0,1fr)]">
               <Sidebar />
               <div>
                 <Search />
                 <main>
                    {children}
                 </main>
               </div>
             </div>
           </>
    )
}