import { createSlice } from "@reduxjs/toolkit";

const initialState = [
            {
                id: 1,
                name: "Задача1",
                description: "Описание1",
                categoryId: "Категория1"

            },
            {
                id: 2,
                name: "Задача2",
                description: "Описание2",
                categoryId: "Категория2"

            },
            {
                id: 3,
                name: "Задача3",
                description: "Описание3",
                categoryId: "Категория3"
            }
        ];

 const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemAdded(state, action) {
            state.push(action.payload);
        }
    },
});

 export const { itemAdded } = itemsSlice.actions;

export default itemsSlice.reducer;