
import { createReducer } from "@reduxjs/toolkit";
import {
    getAmount,
    setAmount
} from "../action";

const initialState = {
    amount: 0
};

export const childReducer = createReducer(initialState, {
    [setAmount.type]: (state, action) => ({
        ...state,
        amount: action.payload,
    }),
});