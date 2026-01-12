"use client";

import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(searchTerm);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div
      className="search__background bg-[#fff] h-20 z-10 border-b-1
        border-[#e1e7ea]"
    >
      <div
        className="search__wrapper realitive flex items-center
            justify-between px-8 max-w-[1070px] mx-auto h-full"
      >
        <figure>
          <Image src={Logo} alt="Summarist Logo" className="w-0 h-0" />
        </figure>
        <div className="search__content flex items-center gap-6 max-w-[340px] w-full">
          <div className="search flex items-center w-full">
            <div className="search__input--wrapper relative gap-2">
              <SearchInput value={searchTerm} onChange={setSearchTerm} />
              <div
                className="search__icon flex items-center absolute
                            h-full right-2 top-0 justify-end border-l-2 border-[#e1e7ea]
                            pl-2"
              >
                {searchTerm ? (
                  <HiOutlineXMark
                    onClick={handleClear}
                    className="cursor-pointer
         h-8 w-8 text-[#03314b]"
                  />
                ) : (
                  <BiSearch className="w-6 h-6 text-[#03314b]" />
                )}
              </div>
            </div>
          </div>
        </div>
        <SearchResults searchTerm={debounce} />
      </div>
    </div>
  );
}
