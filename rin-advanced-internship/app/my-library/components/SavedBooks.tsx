import { useUserLibrary } from "@/app/hooks/useUserLibrary";
import BookCard from "@/app/for-you/components/BookCard";

export default function SavedBooks() {
  const { books } = useUserLibrary();
  if (books.length === 0) return null;
  

  return (
    <>
      <div className="title font-bold text-[#032b41] mb-4 text-[22px]">
        Saved Books
      </div>
      <div className="sub-title font-light text-[#394547] mb-4">{books.length} item{books.length >1 ?
        <span>s</span> : null}</div>
      <div
        className="saved__books flex gap-4 mb-8 overflow-x-hidden snap-x hide-scrollbar
             hide-scrollbar::-webkit-scrollbar"
      >
        {books.map((bookInfo: any) => (
          <BookCard key={bookInfo.id} book={bookInfo} />
        ))}
      </div>
    </>
  );
}
