import { configureStore } from '@reduxjs/toolkit'
import loginPopUpReducer from './slices/loginSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            loginPopUp: loginPopUpReducer
        },
    });
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];