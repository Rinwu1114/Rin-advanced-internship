import BookCard from "./BookCard";

async function fetchRecommended() {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
  );
  return res.json();
}

export default async function Recommended() {
  const recommendedBooks = await fetchRecommended();

  return (
    <div>
      <div className="for-you__title font-bold text-[#032b41] mb-4 text-[22px]">
        Recommended For You
      </div>
      <div className="for-you__sub-title font-light text-[#394547] mb-4">
        We think you'll like these
      </div>
      <div className="for-you__recommended--books flex gap-4 mb-8 overflow-x-hidden snap-x hide-scrollbar hide-scrollbar::-webkit-scrollbar">
        {recommendedBooks.map((bookInfo: any) => (
          <BookCard key={bookInfo.id} book={bookInfo} />
        ))}
      </div>
    </div>
  );
}
