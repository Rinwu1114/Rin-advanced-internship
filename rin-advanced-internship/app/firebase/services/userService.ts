import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../init";

export const createOrUpdateUserProfile = async (userData: {
  uid: string;
  email: string;
  isGuest: boolean;
  plan: "Basic" | "Premium" | "Premium-plus";
}) => {
  try {
    await setDoc(
      doc(db, "users", userData.uid),
      {
        ...userData,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
  } catch (error) {
    throw error
  }
};

export const getUserProfile = async (userId: string) => {
    try {
        const docRef = doc(db, "users", userId)
        const docSnap = await getDoc(docRef)
    
        if (docSnap.exists()){
            return docSnap.data()
        }
        return null
    }
    catch (error) {
        console.error("Error getting user profile", error)
        return null
    }
}

export const upgradeToPremium = async (userId: string) => {
    try {
        await updateDoc(doc(db, "users", userId),{
            plan: 'Premium',
            upgradedAt: new Date().toISOString()
        })
        return true
    } catch (error) {
        console.error("Error upgrading user", error)
        return false
    }
}

export const upgradeToPremiumPlus = async (userId: string) => {
    try {
        await updateDoc(doc(db, "users", userId),{
            plan: 'Premium-plus',
            upgradedAt: new Date().toISOString()
        })
        return true
    } catch (error) {
        console.error("Error upgrading user", error)
        return false
    }
}