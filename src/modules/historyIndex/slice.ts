import { RootState } from "../../utils/types";
import { endStroke } from "../sharedActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RootState["historyIndex"] = 0;

export const historyIndex = createSlice({
  name: "historyIndex",
  initialState,
  reducers: {
    undo: (state, action: PayloadAction<number>) => {
      return Math.min(state + 1, action.payload);
    },
    redo: (state) => {
      return Math.max(state - 1, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => {
      return 0;
    });
  },
});

export default historyIndex.reducer;

export const { undo, redo } = historyIndex.actions;

export const historyIndexSelector = (state: RootState) => state.historyIndex;
