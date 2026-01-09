import Sidebar from "@/app/components/Sidebar";
import Search from "@/app/components/Search";
import BookInfo from "./components/BookInfo";
import PopUp from "@/app/Landing/components/PopUp/PopUp";

export default async function Book({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bookInfo = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
  ).then((res) => res.json());

  return (
    <>
      <PopUp />
      <div className="grid grid-cols-[200px_minmax(0,1fr)]">
        <Sidebar />
        <div>
          <Search />
          <div className="row">
            <div className="container">
              <BookInfo bookInfo={bookInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
