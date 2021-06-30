import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "items"
};

const toggleModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        modeToggled(state, action) {
            state.mode = action.payload;
        }
    }
});

export const { modeToggled } = toggleModeSlice.actions;

export default toggleModeSlice.reducer;