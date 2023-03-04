import { createSlice } from "@reduxjs/toolkit";

import { SidebarState } from "./types";
import type { RootState } from '../../store'

const initialState: SidebarState = {
    open: false
};

export const sidebarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers: {
        sidebaropening: (state) => {
            state.open = !state.open
        },
    },
})

export const { sidebaropening } = sidebarSlice.actions;
export const sidebaropen = (state: RootState) => state.sidebar.open;

export default sidebarSlice.reducer