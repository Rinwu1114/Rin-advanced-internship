import { useUserLibrary } from "@/app/hooks/useUserLibrary";
import BookCard from "@/app/(main-app)/for-you/components/BookCard";

export default function FinishedBooks() {
  const { books } = useUserLibrary();
  if (books.length === 0) return null;
  const isFinished = books.filter((book) => book.isFinished);

  return (
    <>
      <div className="title font-bold text-[#032b41] mb-4 text-[22px]">
        Finished Books
      </div>
      <div className="sub-title font-light text-[#394547] mb-4">{isFinished.length} item{isFinished.length > 1 ?
        <span>s</span> : null}</div>
      <div
        className="finished__books flex gap-4 mb-8 overflow-x-hidden snap-x hide-scrollbar
         hide-scrollbar::-webkit-scrollbar"
      >
        {isFinished.map((bookInfo: any) => (
          <BookCard key={bookInfo.id} book={bookInfo} />
        ))}
      </div>
    </>
  );
}
