import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OpenState {
    isOpen: boolean
    mode: 'login' | 'signup'
}

const initialState: OpenState = {
    isOpen: false,
    mode: 'login'
}

export const popUpSlice = createSlice({
   name: 'popUp',
   initialState,
   reducers: {
    openPopUp: (state) => {
        state.isOpen = true
    }, 
    closePopUp: (state) => {
        state.isOpen = false
    },
    switchMode: (state, action: PayloadAction<OpenState["mode"]>) => {
        state.mode = action.payload
    }
   }
})

export const { openPopUp, closePopUp, switchMode } = popUpSlice.actions

export default popUpSlice.reducer