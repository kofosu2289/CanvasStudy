import { configureStore } from "@reduxjs/toolkit";
import historyIndex from "./modules/historyIndex/slice";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as strokes } from "./modules/strokes/reducer";

import { logger } from "redux-logger";

export const store = configureStore({
  reducer: { historyIndex, strokes, currentStroke },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});
