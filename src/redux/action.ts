import { createAction } from "@reduxjs/toolkit";

export const getAmount = createAction("[Bank account] get amount");

export const saveAmount = createAction("[Bank account] save amount",
    function prepare(amount: number) {
        return {
            payload: amount,
        };
    });