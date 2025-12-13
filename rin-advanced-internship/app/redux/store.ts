import { configureStore } from '@reduxjs/toolkit'
import loginPopUpReducer from './slices/loginSlice';
import activeReducer from './slices/activeSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            loginPopUp: loginPopUpReducer,
            ActiveTab: activeReducer,
        },
    });
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];