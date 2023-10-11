import { createSlice } from "@reduxjs/toolkit";

const appNavSlice = createSlice({
    name:"appNavSlice",
    initialState:{
        isMenuOpened:true
    },
    reducers:{
        toggleMenu:(state) => {
            state.isMenuOpened = !state.isMenuOpened;
        },
        closeMenu:(state) => {
            state.isMenuOpened = false;
        }
    }
})
export const {toggleMenu,closeMenu } = appNavSlice.actions;
export default appNavSlice.reducer;