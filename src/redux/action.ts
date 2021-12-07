import { createAction } from "@reduxjs/toolkit";


export const saveUser = createAction("[child comp] save user",
    function prepare(user: string) {
        return {
            payload: user,
        };
    });
export const getUser = createAction("[child comp] get user");