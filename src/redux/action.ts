import { createAction } from "@reduxjs/toolkit";

export const getAmount = createAction("[Bank account] get amount");

export const setAmount = createAction("[Bank account] set amount",
    function prepare(amount: number) {
        return {
            payload: amount,
        };
    });