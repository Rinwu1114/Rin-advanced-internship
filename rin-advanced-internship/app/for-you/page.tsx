import Sidebar from "../components/Sidebar"
import Search from "../components/Search"
import Selected from "./components/Selected"

export default function forYou() {
    return ( 
        <div className="grid grid-cols-[200px_1fr]">
       <Sidebar />
       <div>
       <Search />
       <Selected />
       </div>
        </div>
    )
}