import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register } from "module";
import { loginUser, registerUser, loginGuest, loginGoogle } from "../thunks/authThunk";

export type PlanType = 'free' | 'premium';

interface AuthState {
    user: null | {
        uid: string;
        email: string;
        isGuest: boolean;
        plan: PlanType;
    },
    error?: string;
    successMessage?: string;
}
const initialState: AuthState = {
    user: null
}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<AuthState["user"]>) => {
            state.user = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = undefined;
        },
        clearError: (state) => {
            state.error = undefined;
        },
        registerSuccess: (state) => {
            state.error = undefined;
            state.successMessage = "Registration successful! Please log in.";
        },
        registerFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }, 
        guestLogin: (state, action: PayloadAction<AuthState["user"]>) => {
            state.user = action.payload;
        },
        googleLoginFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setUser: (state, action: PayloadAction<AuthState["user"]>) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = undefined;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(registerUser.fulfilled, (state) => {  
            state.error = undefined;
            state.successMessage = "Registration successful! Please log in.";
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(loginGuest.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(loginGoogle.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = undefined;
        })
        .addCase(loginGoogle.rejected, (state, action) => {
            state.error = action.error.message;
        });
    }
})

export const {
    loginSuccess,
    loginFailure,
    logout,
    clearError,
    registerSuccess,
    registerFailure,
    guestLogin,
    googleLoginFailure,
    setUser
} = authSlice.actions;

export default authSlice.reducer;