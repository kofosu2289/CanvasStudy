import { configureStore } from "@reduxjs/toolkit";
import historyIndex from "./modules/historyIndex/slice";
import currentStroke from "./modules/currentStroke/slice";
import strokes from "./modules/strokes/slice";
import visibleModal from "./modules/modals/slice";

import { logger } from "redux-logger";

export const store = configureStore({
  reducer: { historyIndex, strokes, currentStroke, visibleModal },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});
