import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalStateType {
  isModal: boolean;
}

const initialState: ModalStateType = {
  isModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state: ModalStateType, action: PayloadAction<boolean>) {
      state.isModal = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
