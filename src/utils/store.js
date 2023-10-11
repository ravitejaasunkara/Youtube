import appNavSlice from "./appNavSlice";
import chatSlice from "./chatSlice";
import searchKeywordSlice from "./searchKeywordSlice";
import searchSlice from "./searchSlice";
import videoCategorySlice from "./videoCategorySlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        app:appNavSlice,
        search:searchSlice,
        searchTerm:searchKeywordSlice,
        chat:chatSlice,
        videoCategory:videoCategorySlice
    },
});

export default store;