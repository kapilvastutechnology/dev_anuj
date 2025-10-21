import { configureStore } from "@reduxjs/toolkit";
import { dogApi } from "../features/posts/dogApi";

export const store = configureStore({
  reducer: {
  [dogApi.reducerPath]:dogApi.reducer
  },

  //caching , invalidation, Polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
     dogApi.middleware
    ]),
});
