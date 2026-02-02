import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    menuOpen: boolean
}

const initialState: MenuState = {
    menuOpen: false
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.menuOpen = !state.menuOpen
        },
        closeMenu: (state) =>{
            state.menuOpen = false
        },
        openMenu: (state) => {
            state.menuOpen = true
        }
    }
})

export const { toggleMenu, closeMenu, openMenu } = menuSlice.actions

export default menuSlice.reducer