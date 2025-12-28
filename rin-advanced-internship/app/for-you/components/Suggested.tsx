import DisplayDuration from "@/app/player/[id]/components/Duration";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

async function fetchSuggested() {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
  );
  return res.json();
}

export default async function Suggested() {
  const books = await fetchSuggested();

  return (
    <div>
      <div className="suggested__title font-bold text-[#032b41] mb-4 text-[22px]">
        Suggested Books
      </div>
      <div className="suggested__sub-title font-light text-[#394547] mb-4">
        Browse those books
      </div>
      <div className="suggested__books flex gap-4 mb-8 overflow-x-hidden snap-x hide-scrollbar hide-scrollbar::-webkit-scrollbar">
        {books.map((bookInfo: any) => (
          <Link
            href={`/book/${bookInfo.id}`}
            className="suggested__book--link relative rounded-sm max-w-[200px] w-full px-3 pt-8 pb-3 snap-start"
            key={bookInfo.id}
          >
            {bookInfo.subscriptionRequired === true ? <div className="book__pill bg-[#032b41] h-[18px] px-2 absolute
            top-0 right-0 text-[#fff] text-[10px] flex items-center rounded-3xl">Premium</div>
            : null}
            <audio src={bookInfo.audioLink}></audio>
            <figure className="book__img--wrapper mb-2 w-[172px] h-[172px">
              <img src={bookInfo.imageLink} alt="suggested books" />
            </figure>
            <div className="suggested__book--title font-bold text-[#032b41] mb-2">
              {bookInfo.title}
            </div>
            <div
              className="suggested__book--author font-light text-sm text-[#6b757b]
                            mb-2"
            >
              {bookInfo.author}
            </div>
            <div
              className="suggested__book--sub-title font-light text-[#394547] text-sm
                            mb-2"
            >
              {bookInfo.subTitle}
            </div>
            <div className="suggested__book--details-wrapper flex gap-2">
              <div
                className="suggested__book--details flex items-center
                     gap-1 text-sm font-light text-[#6b757b]"
              >
                <div className="suggested__book--details-icon flex">
                  <CiClock2 className="w-4 h-4" />
                </div>
                <div className="suggested__book--details-text "><DisplayDuration playerInfo={bookInfo}/></div>
              </div>
              <div
                className="suggested__book--details flex items-center
                       gap-1 text-sm font-light text-[#6b757b]"
              >
                <div className="suggested__book--details-icon flex">
                  <CiStar className="w-4 h-4" />
                </div>
                <div className="suggested__book--details-text">
                  {bookInfo.averageRating}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
