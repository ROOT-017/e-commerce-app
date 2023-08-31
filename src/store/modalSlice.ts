import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalStateType {
  isModal: boolean;
  isCartModal: boolean;
}

const initialState: ModalStateType = {
  isModal: false,
  isCartModal: false,
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
  },
});

export const { toggleModal, toggleCartModal } = modalSlice.actions;
export default modalSlice.reducer;
