import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";

export type ModalState = {
  isShown: boolean;
  modalName: string | null;
};

const initialState: ModalState = {
  isShown: true,
  modalName: null,
};

const visibleModal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.isShown = true;
      state.modalName = action.payload;
    },
    hide: (state) => {
      state.isShown = true;
      state.modalName = null;
    },
  },
});

export default visibleModal.reducer;

export const { show, hide } = visibleModal.actions;

export const visibleModalSelector = (state: RootState) => state.visibleModal;

export const modalNameSelector = (state: RootState) =>
  state.visibleModal.modalName;
