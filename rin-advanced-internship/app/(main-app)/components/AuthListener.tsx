"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/app/firebase/init";
import { setUser, logout, PlanType } from "@/app/redux/slices/authState";
import type { AppDispatch } from "@/app/redux/store";
import {
  getDoc,
  doc,
  onSnapshot,
  collection,
  query,
  where,
} from "firebase/firestore";

export default function AuthListener() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const subRef = collection(
          db,
          "users",
          firebaseUser.uid,
          "subscriptions"
        );

        const q = query(subRef, where("status", "in", ["active", "trialing"]));

        const unsubscribeSubs = onSnapshot(q, (snapshot) => {
          if (!snapshot.empty) {
            const subData = snapshot.docs[0].data();

            const assignedPlan = (subData.firebaseRole ||
              subData.role ||
              subData.items?.[0]?.plan?.metadata?.firebaseRole ||
              "Basic") as PlanType;

            dispatch(
              setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email!,
                isGuest: false, // Or pull from a separate doc get if needed
                plan: assignedPlan,
              })
            );
          }
        });

        return () => unsubscribeSubs();
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribeAuth();
  }, [dispatch]);

  return null;
}
