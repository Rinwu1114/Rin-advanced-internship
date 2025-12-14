import Logo from '../../public/assets/logo.png'
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

export default function Search() {
    return (
        <div className="search__background bg-[#fff] h-20 z-10 border-b-1
        border-[#e1e7ea]">
            <div className="search__wrapper realitive flex items-center
            justify-between px-8 max-w-[1070px] mx-auto h-full">
                <figure>
                    <Image src={Logo} alt="Summarist Logo" className='w-0 h-0'/>
                </figure>
                <div className="search__content flex items-center gap-6 max-w-[340px] w-full">
                    <div className="search flex items-center w-full">
                        <div className="search__input--wrapper relative gap-2">
                            <input type="text" placeholder='Search for books'
                             className="search__input h-10 min-w-[340px] w-full px-4 outline-none
                             border-[#e1e7ea] border-2 rounded-lg text-[#042330]
                             text-sm " />
                            <div className="search__icon flex items-center absolute
                            h-full right-2 top-0 justify-end border-l-2 border-[#e1e7ea]
                            pl-2">
                                <BiSearch className='w-6 h-6 text-[#03314b]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}