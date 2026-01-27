import { useEffect, useState } from "react"
import Link from "next/link"
import { CiClock2 } from "react-icons/ci";
import DisplayDuration from "@/app/(main-app)/player/[id]/components/Duration";
import SearchLoadingSkeleton from "../LoadingComponents/SearchLoadingSkeleton";

interface SearchResultsProps {
    searchTerm: string
    isLoading: boolean
}

export default function SearchResults({searchTerm, isLoading}: SearchResultsProps){
    const [results, setResults] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        if(!searchTerm){
            setResults([])
            return
        }
        
        const fetchSearch = async () =>{
            setIsFetching(true)
            try{
                const response = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${encodeURIComponent(searchTerm)}`)
                const data = await response.json()
                setResults(data)
            } catch(error) {
                console.error("Search failed", error)
            } finally {
                setIsFetching(false)
            }
        }
        fetchSearch()
    }, [searchTerm])

    if(!searchTerm && !isLoading){
        return null
    }
    if(isLoading || isFetching){
        return <SearchLoadingSkeleton />
    }
    if (results.length === 0) {
    return(
        <div className="search__books--wrapper z-25 flex flex-col max-w-110
        w-full max-h-[640px] ml-auto overflow-y-auto p-4 absolute
        top-[104px] right-[24px] bg-[#fff] border border-[#e1e7ea]">No books found</div>
    )
}
    return(
        <div className="search__books--wrapper z-25 flex flex-col max-w-110
        w-full max-h-[640px] ml-auto overflow-y-auto p-4 absolute
        top-[104px] right-[24px] bg-[#fff] border border-[#e1e7ea]">
            {results.map((bookInfo: any) => (
                <Link href={`/book/${bookInfo.id}`}
                 key={bookInfo.id}
                 className="flex items-center gap-6 p-4 h-30 border-b
                 border-[#e1e7ea]">
                    <audio src={bookInfo.audioLink}></audio>
                    <figure className="h-20 w-20 min-w-20">
                        <img src={bookInfo.imageLink} alt="Book Image" />
                    </figure>
                    <div>
                        <div className="book__title font-medium text-[#032b41]
                        mb-2">
                            {bookInfo.title}
                        </div>
                        <div className="book__author text-sm text-[#6b757b] mb-2
                        font-light">
                            {bookInfo.author}
                        </div>
                        <div className="book__duration flex items-center gap-1
                        text-sm font-light text-[#6b757b]">
                            <div className="duration__icon"><CiClock2 className="w-4 h-4" /></div>
                            <div className="duration__text"><DisplayDuration playerInfo={bookInfo}/></div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}