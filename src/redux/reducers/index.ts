import { combineReducers } from "@reduxjs/toolkit";
import { childReducer } from "./child";

const rootReducer = combineReducers({
    child: childReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;