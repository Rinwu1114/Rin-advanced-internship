"use client";

import { addBookToLibrary } from "@/app/firebase/services/libraryServices";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { openPopUp } from "@/app/redux/slices/loginSlice";
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

export default function SaveToLibrary({ bookInfo }: { bookInfo: any }) {
  console.log("🔍 SaveToLibrary mounted");
  console.log("📚 Book data received:", bookInfo);
  console.log("🆔 Book ID:", bookInfo?.id);
  const user = useSelector((state: RootState) => state.AuthState.user);
  const dispatch = useDispatch();
  console.log("👤 Current user:", user?.uid);
  const [inLibrary, setInLibrary] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // const checkIfBookInLibrary = async () => {
  //     const isAdded = await checkBook(user.uid, bookInfo.id)
  //     setInLibrary(isAdded)
  // }

  // useEffect(() => {
  //     if (user) {
  //         checkIfBookInLibrary()
  //     }
  // }, [user])

  const handleAddBook = async () => {
    if (!user) {
      dispatch(openPopUp());
      return;
    }
    await addBookToLibrary(user.uid, bookInfo.id, {
      title: bookInfo.title,
      author: bookInfo.author,
      subTitle: bookInfo.subTitle,
      imageLink: bookInfo.imageLink,
      audioLink: bookInfo.audioLink,
      totalRating: bookInfo.totalRating,
      averageRating: bookInfo.averageRating,
      subscriptionRequired: bookInfo.subscriptionRequired,
    });
    setIsAdded(true);
  };

  return (
    <>
      {isAdded ? (
        <div
          className="bookmark flex items-center gap-2 mb-10 cursor-pointer text-lg 
                text-[#0365f2] font-medium transition duration-150 hover:text-[#044298]"
        >
          <div className="bookmark__icon flex">
            <IoBookmark className="w-5 h-5" />
          </div>
          <div className="bookmark__text">Saved in My Library</div>
        </div>
      ) : (
        <div
          className="bookmark flex items-center gap-2 mb-10 cursor-pointer text-lg 
            text-[#0365f2] font-medium transition duration-150 hover:text-[#044298]"
        >
          <div className="bookmark__icon flex">
            <CiBookmark className="w-5 h-5" />
          </div>
          <div className="bookmark__text" onClick={handleAddBook}>
            Add title to My Library
          </div>
        </div>
      )}
    </>
  );
}
