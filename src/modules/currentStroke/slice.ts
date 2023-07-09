import { endStroke } from "../sharedActions";
import { RootState, Point } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
};

const currentStroke = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload]
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload)
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = []
    })
  }
})

export default currentStroke.reducer

export const { beginStroke, updateStroke, setStrokeColor} = currentStroke.actions

export const currentStrokeSelector = (state: RootState) => state.currentStroke;
