import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "../features/categories/categoriesSlice";
import itemsReducer from "../features/items/itemsSlice";
import toggleModeReducer from "../features/toggleModeSlice";
import modalTypeReducer from "../features/modal/modalTypeSlice";


export default configureStore({
  reducer: {
    mode: toggleModeReducer,
    modalType: modalTypeReducer,
    items: itemsReducer,
    categories: categoriesReducer,
  },
})