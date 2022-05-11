import { configureStore } from "@reduxjs/toolkit";
import blocks from "./slices/blocks";

export const store = configureStore({
  reducer: { blocks },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
