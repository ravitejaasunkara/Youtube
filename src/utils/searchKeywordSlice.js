import { createSlice } from "@reduxjs/toolkit";

const searchKeywordSlice = createSlice({
    name:'searchKeyword',
    initialState:{
        searchTerm:''
    },
    reducers:{
        setSearchKeyword:(state,action) => {
            state.searchTerm = action.payload;
        }
    }
})
export const {setSearchKeyword} = searchKeywordSlice.actions;
export default searchKeywordSlice.reducer;