import { db } from "./init";
import {
  collection,
  addDoc,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";

export const createCheckoutSession = async (
  uid: string,
  priceId: string
): Promise<void> => {
  // 1. Create a doc in the user's checkout_sessions subcollection
  const docRef = await addDoc(
    collection(db, "users", uid, "checkout_sessions"),
    {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    }
  );

  // 2. Wait for the extension to update the doc with a Stripe URL
  onSnapshot(docRef, (snap) => {
    // We tell TypeScript that the data will look like this
    const data = snap.data() as DocumentData | undefined;

    if (data) {
      const url = data.url as string | undefined;
      const error = data.error as { message: string } | undefined;

      if (url) {
        window.location.assign(url);
      }
      if (error) {
        console.error(`Stripe error: ${error.message}`);
      }
    }
  });
};
