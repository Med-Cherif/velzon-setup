import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/adminSlice";
import { layoutSlice } from "./slices/layoutSlice";

const store = configureStore({
    reducer: {
        admin: adminReducer,
        layout: layoutSlice
    }
})

export default store