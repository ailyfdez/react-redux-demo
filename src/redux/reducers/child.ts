
import { createReducer } from "@reduxjs/toolkit";
import {
    saveAmount
} from "../action";

const initialState = {
    amount: 0
};

export const childReducer = createReducer(initialState, {
    [saveAmount.type]: (state, action) => ({
        ...state,
        amount: action.payload,
    }),
});