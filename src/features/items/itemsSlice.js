import {createSlice} from "@reduxjs/toolkit";

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
    name: "items",
    initialState,
    reducers: {
        itemAdded(state, action) {
            state.push(action.payload);
        },
        itemUpdated(state, action) {
            const {id, name, description, categoryId} = action.payload;
            const existingItem = state.find(item => item.id == id);

            if (existingItem) {
                existingItem.name = name;
                existingItem.description = description;
                existingItem.categoryId = categoryId;
            }
        },
        itemDeleted(state, action) {
            const {id} = action.payload;

            const existingItem = state.find(item => item.id == id);

            console.log("WOOOP", existingItem);
            let existingIndex;
            if (existingItem) {
                existingIndex = state.findIndex(item => item.id == id);
                state.splice(existingIndex, 1);
            }
        }
    },
});


export const {itemAdded, itemUpdated, itemDeleted} = itemsSlice.actions;

export default itemsSlice.reducer;