import { configureStore } from "@reduxjs/toolkit";
import slice from './gameSlice'

export const store = configureStore({
    reducer :{
        game : slice,
    }
})