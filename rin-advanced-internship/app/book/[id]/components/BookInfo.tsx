import { IoIosStarOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";
import BookTitle from "./BookTitle";
import BookButtons from "./BookButtons";
import DisplayDuration from "@/app/player/[id]/components/Duration";

export default function BookInfo({ bookInfo }: { bookInfo: any }) {
  return (
    <div className="book__wrapper flex max-[1000px]:gap-4 gap-8 max-[1000px]:flex-col flex-row">
      <div className="book w-full max-[1000px]:order-1">
        <BookTitle bookInfo={bookInfo} />
        <div className="book__author text-[#032b41] mb-4 font-semibold ">
          {bookInfo.author}
        </div>
        <div className="book__sub-title text-[#032b41] mb-4 font-light text-xl">
          {bookInfo.subTitle}
        </div>
        <div className="inner__wrapper py-4 mb-6 border-y border-[#e1e7ea]">
          <div className="inner__details--wrapper flex flex-wrap max-w-[400px] gap-y-3">
            <div
              className="inner__detail flex items-center w-1/2 text-[#032b41] font-medium
                    text-sm"
            >
              <div className="inner__icon flex mr-1">
                <IoIosStarOutline className="w-6 h-6" />
              </div>
              <div className="inner__rating">
                {bookInfo.averageRating} ({bookInfo.totalRating} ratings)
              </div>
            </div>
            <div
              className="inner__detail flex items-center w-1/2 text-[#032b41] font-medium
                    text-sm"
            >
              <div className="inner__icon flex mr-1">
                <GoClock className="w-6 h-6" />
              </div>
              <div className="inner__duration">
                <DisplayDuration playerInfo={bookInfo} />
              </div>
            </div>
            <div
              className="inner__detail flex items-center w-1/2 text-[#032b41] font-medium
                    text-sm"
            >
              <div className="inner__icon flex mr-1">
                <IoMicOutline className="w-6 h-6" />
              </div>
              <div className="book__type">{bookInfo.type}</div>
            </div>
            <div
              className="inner__detail flex items-center w-1/2 text-[#032b41] font-medium
                    text-sm"
            >
              <div className="inner__icon flex mr-1">
                <HiOutlineLightBulb className="w-6 h-6" />
              </div>
              <div className="book__key--ideas">
                {bookInfo.keyIdeas} Key ideas
              </div>
            </div>
          </div>
        </div>
        <div className="book__btn--wrapper flex gap-4">
          <BookButtons bookId={bookInfo.id} />
        </div>
        <div
          className="bookmark flex items-center gap-2 mb-10 cursor-pointer text-lg 
            text-[#0365f2] font-medium transition duration-150 hover:text-[#044298]"
        >
          <div className="bookmark__icon flex">
            <CiBookmark className="w-5 h-5" />
          </div>
          <div className="bookmark__text">Add title to My Library</div>
        </div>
        <div className="book__second--title text-lg text-[#032b41] mb-4 font-semibold">
          What's it about?
        </div>
        <div className="book__tags--wrapper flex flex-wrap gap-4 mb-4">
          {bookInfo.tags.map((tag: string, index: number) => (
            <div
              key={index}
              className="book__tag bg-[#f1f6f4] px-4 h-12
                    flex items-center text-[#032b41] cursor-not-allowed font-medium
                    rounded-sm "
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="book__description text-[#032b41] mb-4 leading-[1.5]">
          {bookInfo.bookDescription}
        </div>
        <div className="book__about text-lg text-[#032b41] mb-4 font-semibold">
          About the author
        </div>
        <div className="book__about--description text-[#032b41] leading-[1.5]">
          {bookInfo.authorDescription}
        </div>
      </div>
      <div className="book__img max-[1000px]:flex max-[1000px]:justify-center">
        <figure className="img__wrapper min-w-[300px] w-[300px] h-[300px]">
          <img src={bookInfo.imageLink} alt={bookInfo.title} />
        </figure>
      </div>
    </div>
  );
}
