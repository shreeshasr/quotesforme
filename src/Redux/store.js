import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./QuotesSlice"
export const store = configureStore({
    reducer: {
        quotes: quotesReducer
    }
})