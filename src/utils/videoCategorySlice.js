import { createSlice } from "@reduxjs/toolkit";

const videoCategory = createSlice({
    name: 'videoCategory',
    initialState: {
        categoryId: 0
    },
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        }
    }
})
export const { setCategoryId } = videoCategory.actions;
export default videoCategory.reducer;