import BookCardSkeleton from "../components/LoadingComponents/BookCardSkeleton";
import Sidebar from "../components/Sidebar";
import Search from "../components/SearchComponents/Search";

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-[200px_minmax(0,1fr)]">
        <Sidebar />
        <div>
          <Search />
          <div className="row">
            <div className="container">
              <div className="for-you__wrapper flex">
                {Array.from({ length: 6 }).map((_, i ) =>(
                    <BookCardSkeleton key={i}/>
                ))}
                {Array.from({ length: 6 }).map((_, i ) =>(
                    <BookCardSkeleton key={i}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
