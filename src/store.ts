import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import historyIndex from "./modules/historyIndex/slice";
import currentStroke from "./modules/currentStroke/slice";
import strokes from "./modules/strokes/slice";
import visibleModal from "./modules/modals/slice";
import { projectsList } from "./modules/projectsList/slice";
import { RootState } from "./utils/types";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: { historyIndex, strokes, currentStroke, visibleModal, projectsList },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type AppDispatch = typeof store.dispatch
