"use client";
import SavedBooks from "./SavedBooks";
import FinishedBooks from "./FinishedBooks";
import LibraryLoggedOut from "./LibraryLoggedOut";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

export default function LibraryLoggedIn() {
  const user = useSelector((state: RootState) => state.AuthState.user);
  return (
    <>
      {user ? (
        <>
          <SavedBooks />
          <FinishedBooks />
        </>
      ) : (
        <LibraryLoggedOut />
      )}
    </>
  );
}
