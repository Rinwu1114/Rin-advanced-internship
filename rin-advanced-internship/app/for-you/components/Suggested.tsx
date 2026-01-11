import BookCard from "./BookCard";

export default function Suggested({ suggestedBooks }: { suggestedBooks: any }) {
  return (
    <div>
      <div className="suggested__title font-bold text-[#032b41] mb-4 text-[22px]">
        Suggested Books
      </div>
      <div className="suggested__sub-title font-light text-[#394547] mb-4">
        Browse those books
      </div>
      <div className="suggested__books flex gap-4 mb-8 overflow-x-hidden snap-x hide-scrollbar hide-scrollbar::-webkit-scrollbar">
        {suggestedBooks.map((bookInfo: any) => (
          <BookCard key={bookInfo.id} book={bookInfo} />
        ))}
      </div>
    </div>
  );
}
