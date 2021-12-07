
import { createReducer } from "@reduxjs/toolkit";
import {
    saveUser
} from "../action";

const initialState = {
    user: "Aily"
};

export const childReducer = createReducer(initialState, {
    [saveUser.type]: (state, action) => ({
        ...state,
        user: action.payload,
    }),
});