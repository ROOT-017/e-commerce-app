import { configureStore } from "@reduxjs/toolkit";
// import exp from "constants";
import modalSlice from "./modalSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
