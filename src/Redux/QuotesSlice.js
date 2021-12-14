import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    quoteOfDay: '',
    color: '',
    randomNumber: 0,
}

export const executeQuoteApi = createAsyncThunk(
    "quotes/executeQuoteApi",
    async (api) => {
        console.log("Trigered in executeQuoteApi " + api)
        let res = await axios.get(api)
        console.log("api res " + JSON.stringify(res))
        return res.data
    }
)

const QuotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        getARandomColor: (state) => {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            console.log("Color genearted = "  +color)
            state.color = color
        }
    },
    extraReducers: {
    [executeQuoteApi.pending]: () => {
        console.log("Pending");
    },
    [executeQuoteApi.fulfilled]: (state, { payload }) => {
        console.log("fullfilled " + JSON.stringify(payload));
        state.quoteOfDay = payload
        state.randomNumber = Math.floor((Math.random() * state.quoteOfDay.length) + 1)
    },

    }
})

export const {getARandomColor} = QuotesSlice.actions

export default QuotesSlice.reducer