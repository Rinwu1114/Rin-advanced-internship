'use client'

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/firebase/init"
import { setUser, logout } from "@/app/redux/slices/authState"
import type { AppDispatch } from '@/app/redux/store';
import { PlanType } from "../redux/slices/authState"

export default function AuthListener() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                dispatch(setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email!,
                    isGuest: firebaseUser.isAnonymous,
                    plan: 'free' as PlanType
                }));
            } else {
                dispatch(logout());
            }   
        });

        return () => unsubscribe();
    }, [dispatch]);

    return null;
}