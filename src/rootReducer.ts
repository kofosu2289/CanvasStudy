
import { RootState } from "./utils/types";

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
  historyIndex: 0,
};
export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  
};

export const historyIndexSelector = (state: RootState) => state.historyIndex;
export const strokesSelector = (state: RootState) => state.strokes;
