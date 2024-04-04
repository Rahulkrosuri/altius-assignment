import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
    name: 'invoices',
    initialState: {
        value : []
    },
    reducers: {
        addToInvoices: (state,action) => {
            state.value.push(action.payload)
        }
    }
})
export const {addToInvoices} = invoiceSlice.actions
export default invoiceSlice.reducer