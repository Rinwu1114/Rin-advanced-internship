import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginWithEmail,
  registerWithEmail,
  logoutUser,
  sendPasswordReset,
  loginAsGuest,
} from "../../firebase/auth";
import { loginSuccess, PlanType } from "../slices/authState";
import { auth } from "../../firebase/init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createOrUpdateUserProfile } from "@/app/firebase/services/userService";

//login thunk

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch }
  ) => {
    const firebaseUser = await loginWithEmail(email, password);
    const userData = {
      uid: firebaseUser.uid,
      email: firebaseUser.email!,
      isGuest: false,
      plan: "Basic" as PlanType,
    };

    await createOrUpdateUserProfile(userData);
    dispatch(loginSuccess(userData));
    return userData;
  }
);

const googleProvider = new GoogleAuthProvider();

export const loginGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, { dispatch }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email!,
        isGuest: false,
        plan: "Basic" as PlanType,
      };
      await createOrUpdateUserProfile(userData);
      dispatch(loginSuccess(userData));
      return userData;
    } catch (error) {
      console.error("Google login error", error);
      throw error;
    }
  }
);

export const loginGuest = createAsyncThunk(
  "auth/loginAsGuest",
  async (_, { dispatch }) => {
    try {
      const firebaseUser = await loginAsGuest();
      const userData = {
        uid: firebaseUser.uid,
        email: "guest@guest.com",
        isGuest: true,
        plan: "Premium" as PlanType,
      };
      await createOrUpdateUserProfile(userData);

      dispatch(loginSuccess(userData));
      return userData;
    } catch (error) {
      throw error;
    }
  }
);

//register thunk

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: { email: string; password: string }) => {
    const firebaseUser = await registerWithEmail(email, password);
    if (!firebaseUser || !firebaseUser.email) {
      throw new Error("user reg failed");
    }

    const userData = {
      uid: firebaseUser.uid,
      email: firebaseUser.email || email,
      isGuest: false,
      plan: "Basic" as PlanType,
    };
    await createOrUpdateUserProfile(userData);

    return {
      success: true,
      email: email,
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
