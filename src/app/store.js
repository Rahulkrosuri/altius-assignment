import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import invoiceList from "../slice/slice"

export const store = configureStore({
  reducer: {
    invoices: invoiceList
  },
});
