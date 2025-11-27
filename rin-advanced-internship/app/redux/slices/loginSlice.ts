import { createSlice } from '@reduxjs/toolkit'

interface OpenState {
    isOpen: boolean
}

const initialState: OpenState = {
    isOpen: false,
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
    }
   }
})

export const { openPopUp, closePopUp } = popUpSlice.actions

export default popUpSlice.reducer