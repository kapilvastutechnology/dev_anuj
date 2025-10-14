import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/posts/postApi";

export const store = configureStore({
  reducer: {
  [postApi.reducerPath]:postApi.reducer
  },

  //caching , invalidation, Polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
     postApi.middleware
    ]),
});