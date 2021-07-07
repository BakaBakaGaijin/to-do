import {createSlice} from "@reduxjs/toolkit";

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
        },
        categoryUpdated(state, action) {
            const {id, name, description} = action.payload;
            const existingCategory = state.find(category => category.id === id);

            if (existingCategory) {
                existingCategory.name = name;
                existingCategory.description = description;
            }
        },
        categoryDeleted(state, action) {
            const {id} = action.payload;
            const existingCategory = state.find(category => category.id == id);
            let existingIndex;
            if (existingCategory) {
                existingIndex = state.findIndex(category => category.id == id);
                state.splice(existingIndex, 1);
            }
            //state = "1";

        }
    },
});

export const {categoryAdded, categoryUpdated, categoryDeleted} = categoriesSlice.actions;

export default categoriesSlice.reducer;