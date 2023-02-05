import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'admin',
    initialState: {
        token: null,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null
        }
    }
})

const adminReducer = slice.reducer

export default adminReducer

export const adminActions = slice.actions;