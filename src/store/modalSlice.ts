import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalStateType {
  isModal: boolean;
  isCartModal: boolean;
  isToast: boolean;
  isSpinder: boolean;
}

const initialState: ModalStateType = {
  isModal: false,
  isCartModal: false,
  isToast: false,
  isSpinder: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state: ModalStateType, action: PayloadAction<boolean>) {
      state.isModal = action.payload;
    },
    toggleCartModal(state: ModalStateType, action: PayloadAction<boolean>) {
      state.isCartModal = action.payload;
    },
    toggleToast(state: ModalStateType, action: PayloadAction<boolean>) {
      state.isToast = action.payload;
    },
    toggleSpinderModel(state: ModalStateType, action: PayloadAction<boolean>) {
      state.isSpinder = action.payload;
    },
  },
});

export const { toggleModal, toggleCartModal, toggleToast, toggleSpinderModel } =
  modalSlice.actions;
export default modalSlice.reducer;
