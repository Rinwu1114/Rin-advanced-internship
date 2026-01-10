'use client'

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/firebase/init"
import { setUser, logout, PlanType } from "@/app/redux/slices/authState"
import type { AppDispatch } from '@/app/redux/store';
import { getDoc, doc } from "firebase/firestore"
import { db } from "@/app/firebase/init"

export default function AuthListener() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        const userData = userDoc.exists() ? userDoc.data() : null;
                dispatch(setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email!,
                    isGuest: userData?.isGuest || false,
                    plan: userData?.plan || "Basic" as PlanType
                }));
            } else {
                dispatch(logout());
            }   
        });

        return () => unsubscribe();
    }, [dispatch]);

    return null;
}