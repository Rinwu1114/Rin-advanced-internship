import DisplayDuration from "@/app/(main-app)/player/[id]/components/Duration";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import BookPill from "./BookPill";
import type { bookData } from "@/app/firebase/services/libraryServices";

interface BookCardProps {
  book: bookData;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/book/${book.id}`}
      className="for-you__recommended--books-link 
                        relative rounded-sm max-w-[200px] w-full px-3 pt-8 pb-3 snap-start "
      key={book.id}
    >
      {book.subscriptionRequired === true ? <BookPill /> : null}
      <audio src={book.audioLink}></audio>
      <figure className="book__img--wrapper mb-2 w-[172px] h-[172px]">
        <img src={book.imageLink} alt="book image" />
      </figure>
      <div className="recommended__book--title font-bold text-[#032b41] mb-2">
        {book.title}
      </div>
      <div
        className="recommended__book--author font-light text-sm text-[#6b757b]
                            mb-2"
      >
        {book.author}
      </div>
      <div
        className="recommended__book--sub-title font-light text-[#394547] text-sm
                            mb-2"
      >
        {book.subTitle}
      </div>
      <div className="recommended__book--details-wrapper flex gap-2">
        <div
          className="recommended__book--details flex items-center
                                gap-1 text-sm font-light text-[#6b757b]"
        >
          <div className="recommended__book--details-icon flex">
            <CiClock2 className="w-4 h-4" />
          </div>
          <div className="recommended__book--details-text ">
            <DisplayDuration playerInfo={book} />
          </div>
        </div>
        <div
          className="recommended__book--details flex items-center
                                gap-1 text-sm font-light text-[#6b757b]"
        >
          <div className="recommended__book--details-icon flex">
            <CiStar className="w-4 h-4" />
          </div>
          <div className="recommended__book--details-text">
            {book.averageRating}
          </div>
        </div>
      </div>
    </Link>
  );
}
