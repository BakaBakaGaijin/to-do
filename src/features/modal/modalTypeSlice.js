import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalType: "createItem"
};

const modalTypeSlice = createSlice({
    name: "modalType",
    initialState,
    reducers: {
        modalTypeChanged(state, action) {
            state.modalType = action.payload;
        }
    }
});

export const { modalTypeChanged } = modalTypeSlice.actions;

export default modalTypeSlice.reducer;
