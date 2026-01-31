"use client";

import { useState, useEffect } from "react";
import { useSelector, UseSelector } from "react-redux";
import { getUserLibrary } from "../firebase/services/libraryServices";
import { RootState } from "../redux/store";
import type { bookData } from "@/app/firebase/services/libraryServices";

interface useUserLibraryResult {
  books: bookData[];
}

export const useUserLibrary = (): useUserLibraryResult => {
  const [books, setBooks] = useState<bookData[]>([]);

  const user = useSelector((state: RootState) => state.AuthState.user);

  const loadBooks = async () => {
    if (!user) {
      setBooks([]);
      return;
    }

    try {
      const fetchedBooks = await getUserLibrary(user.uid);
      setBooks(fetchedBooks);
    } catch (err: any) {
      setBooks([]);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [user]);

  return {
    books,
  };
};
