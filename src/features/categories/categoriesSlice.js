import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        name: "Супер важно",
        description: "Это надо сделать как можно раньше",
    },
    {
        id: "2",
        name: "Очень важно",
        description: "Это надо сделать на этой неделе",
    },
    {
        id: "3",
        name: "Важно",
        description: "Это надо сделать",
    },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        categoryAdded(state, action) {
            state.push(action.payload);
        }
    },
});

 export const { categoryAdded } = categoriesSlice.actions;

export default categoriesSlice.reducer;