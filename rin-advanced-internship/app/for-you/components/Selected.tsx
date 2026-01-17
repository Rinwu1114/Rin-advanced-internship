import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";
import DisplayDuration from "@/app/player/[id]/components/Duration";

async function fetchBook(){
        const res =  await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        return res.json()
    }

export default async function selected() {

    const selectedBook = await fetchBook()
    const bookInfo = selectedBook[0];

  return (
    <div>
      <div className="for-you__title text-2xl font-bold text-[#032b41] mb-4">
        Selected just for you{" "}
      </div>
      <audio src={bookInfo.audioId}></audio>
      <Link
        href={`/book/${bookInfo.id}`}
        className="xl:flex-row md:flex-row flex flex-col justify-between xl:w-2/3 w-full p-6
                mb-6 bg-[#fbefd6] gap-6 
                rounded-sm
                "
      >
        <div
          className="selected__book--subtitle
                    text-[#032b41] w-40% md:text-base text-sm"
        >
          {bookInfo.subTitle}
        </div>
        <div
          className="selected__book--line
                    hidden md:block border-l border-[#bac8ce]
                     "
        ></div>
        <div className="selected__book--content flex gap-4 md:w-6/10 w-full">
          <figure className="book__img--wrapper h-35 w-35 min-w-[140px]">
            <img
              src={bookInfo.imageLink}
              alt="The Lean StartUp image"
              className="w-full h-full"
            />
          </figure>
          <div className="selected__book--text w-full">
            <div
              className="selected__book--title font-semibold
                        text-[#032b41] mb-2"
            >
              {bookInfo.title}
            </div>
            <div
              className="selected__book--author text-[#394547]
                        mb-4 text-sm"
            >
              {bookInfo.author}
            </div>
            <div className="selected__book--duration-wrapper flex items-center gap-2">
              <div className="selected__book--icon flex items-center">
                <FaCirclePlay
                  className="w-10 h-10 flex justify-center bg-[#fff] stroke-[#000]
                                items-center rounded-[50px]"
                />
              </div>
              <div className="selected__book--duration text-sm font-medium text-[#032b41]">
                <DisplayDuration playerInfo={bookInfo} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
