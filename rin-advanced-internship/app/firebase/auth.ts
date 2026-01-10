import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    sendPasswordResetEmail,
    } from "firebase/auth";
import { auth } from "../firebase/init";

export const registerWithEmail = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await signOut(auth)
    return userCredential.user
}

export const loginWithEmail = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export const loginAsGuest = async () => {
    const userCredential = await signInWithEmailAndPassword(auth, "guest@guest.com", "password123");
    return userCredential.user;
}

export const logoutUser = async () => {
    await signOut(auth);
    return "Successfully logged out";
}

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
}

export const sendPasswordReset = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
    return "Password reset email sent";
}