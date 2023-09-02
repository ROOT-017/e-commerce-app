import { configureStore } from "@reduxjs/toolkit";
// import exp from "constants";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
import productSlice from "./productSlice";
import authSLice from "./authSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productSlice,
    cart: cartSlice,
    auth: authSLice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
