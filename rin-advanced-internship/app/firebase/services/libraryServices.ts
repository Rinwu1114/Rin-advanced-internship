import { doc, setDoc, collection, getDocs, updateDoc, getDoc } from "firebase/firestore"
import { db } from '@/app/firebase/init'
import BookTitle from "@/app/book/[id]/components/BookTitle"

export interface bookData {
    id: string,
    // display info
    title: string,
    author: string,
    subTitle: string,
    imageLink: string,
    totalRating: string,
    averageRating: string,
    audioLink: string,
    subscriptionRequired: boolean,
    //user specific
    progress: number, //default to 0%
    isFinished: boolean, //default to not finished
}

export const addBookToLibrary = async (
    userId: string,
    id: string,
    bookData: Omit<bookData, 'id' | 'progress' | 'isFinished'>
) => {
    try {
        const libraryBook: bookData = {
            ...bookData, 
            id: id,
            progress: 0, //default
            isFinished: false //default
        }
        await setDoc(
            doc(db, "users", userId, "library", id),
            libraryBook,
            { merge: true}
        )
        console.log("book added", bookData.title)
        return { sucess: true}
    } catch (error) {
        console.error("error adding to library", error)
    throw error
  }
}

export const getUserLibrary = async (userId: string) => {
    try {
    const libraryRef = collection(db, "users", userId, "library")
    const snapshot = await getDocs(libraryRef) 
    const books: bookData[] = [];
    snapshot.forEach((doc) => {
        const data = doc.data()

        const book: bookData = {
        id: data.bookId || doc.id,
        title: data.title || '',
        author: data.author || '',
        subTitle: data.subTitle || '',
        imageLink: data.imageLink || '',
        audioLink: data.audioLink || '',
        totalRating: data.totalRating || '0',
        averageRating: data.averageRating || '0',
        progress: data.progress || 0,
        subscriptionRequired: data.subscriptionRequired || true,
        isFinished: data.isFinished || false,
        }
        books.push(book)
        })
        return books
    } 
    catch (error) {
    console.error("error fetching library", error)
    throw error
}}

export const updateBookProgress = async (
    userId: string,
    id: string,
    progress: number, 
    isFinished?: boolean
): Promise<{ success: boolean; error?: string }> => {
    try {
        if (!userId || !id) {
            throw new Error("Missing userId or bookId");
        }
        
        const bookRef = doc(db, "users", userId, "library", id);
        
        const existingDoc = await getDoc(bookRef);
        if (!existingDoc.exists()) {
            return { 
                success: false, 
                error: "Book not found in library" 
            };
        }
        
        const existingData = existingDoc.data();
        
        if (existingData?.isFinished) {
            return { 
                success: true, 
            };
        }
        
        const currentProgress = existingData?.progress || 0;
        if (progress < currentProgress && progress < 100) {
            console.log("Progress decreased, skipping update");
            return { success: true };
        }
        
        const updates: any = {
            progress: Math.min(100, Math.max(0, progress)),
        };
        
        const shouldBeFinished = isFinished !== undefined ? 
            isFinished : progress >= 99.9;
            
        if (shouldBeFinished) {
            updates.isFinished = true;
        } else if (isFinished === false) {
            updates.isFinished = false;
        }
        
        await updateDoc(bookRef, updates);
        
        console.log("✅ Progress updated:", { 
            bookId: id, 
            progress, 
            finished: shouldBeFinished 
        });
        
        return { success: true };
        
    } catch (error: any) {
        console.error("❌ updateBookProgress error:", error);
        return {
            success: false,
            error: error.message || "Unknown error"
        };
    }
};