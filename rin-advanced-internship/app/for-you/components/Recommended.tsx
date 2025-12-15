import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

async function fetchRecommended(){
    const res = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended')
    return res.json()
}

export default async function Recommended () {
    const books = await fetchRecommended()
    console.log(books);
    return (
        <div>
                <div className="for-you__title font-bold text-[#032b41] mb-4 text-[22px]">Recommended For You</div>
                <div className="for-you__sub-title font-light text-[#394547] mb-4">We think you'll like these</div>
                <div className="for-you__recommended--books flex gap-4 mb-8 overflow-x-hidden snap-x hide-scrollbar hide-scrollbar::-webkit-scrollbar">
                    {books.map((bookInfo: any) => (
                        <Link href={`/book/${bookInfo.id}`} className="for-you__recommended--books-link 
                        relative rounded-sm max-w-[200px] w-full px-3 pt-8 pb-3 snap-start " key={bookInfo.id}>
                            <audio src={bookInfo.audioLink}></audio>
                            <figure className="book__img--wrapper mb-2 w-[172px] h-[172px]">
                                <img src={bookInfo.imageLink} alt="book image"/>
                            </figure>
                            <div className="recommended__book--title font-bold text-[#032b41] mb-2">{bookInfo.title}</div>
                            <div className="recommended__book--author font-light text-sm text-[#6b757b]
                            mb-2">{bookInfo.author}</div>
                            <div className="recommended__book--sub-title font-light text-[#394547] text-sm
                            mb-2">{bookInfo.subTitle}</div>
                            <div className="recommended__book--details-wrapper flex gap-2">
                                <div className="recommended__book--details flex items-center
                                gap-1 text-sm font-light text-[#6b757b]">
                                    <div className="recommended__book--details-icon flex"><CiClock2 className="w-4 h-4" /></div>
                                    <div className="recommended__book--details-text ">Time</div>
                                </div>
                                <div className="recommended__book--details flex items-center
                                gap-1 text-sm font-light text-[#6b757b]">
                                    <div className="recommended__book--details-icon flex"><CiStar className="w-4 h-4"/></div>
                                    <div className="recommended__book--details-text">{bookInfo.averageRating}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
        </div>
    )
}