import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginWithEmail,
  registerWithEmail,
  logoutUser,
  loginWithGoogle,
  sendPasswordReset,
  loginAsGuest,
} from "../../firebase/auth";
import { PlanType } from "../slices/authState";
import { auth } from "../../firebase/init";
import { signInAnonymously } from "firebase/auth";

//login thunk

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const firebaseUser = await loginWithEmail(email, password);
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email!,
      isGuest: false,
      plan: "free" as PlanType,
    };
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async () => {
    const firebaseUser = await loginWithGoogle();
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email!,
      isGuest: false,
      plan: "free" as PlanType,
    };
  }
);

export const loginGuest = createAsyncThunk("auth/loginAsGuest", async () => {
  const firebaseUser = await loginAsGuest(); // Service function
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "guest@guest.com",
    isGuest: true, 
    plan: "premium" as PlanType,
  };
});

//register thunk

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: { email: string; password: string }) => {
    const firebaseUser = await registerWithEmail(email, password);
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email!,
      isGuest: false,
      plan: "free" as PlanType,
    };
  }
);

//logout thunk

export const logout = createAsyncThunk("auth/logout", async () => {
  await logoutUser();
  return;
});

//password reset thunk

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email: string) => {
    const message = await sendPasswordReset(email);
    return message;
  }
);
