import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../features/recipes/recipeApi";
import { mealApi } from "../features/meals/mealApi";

export const store = configureStore({
  reducer: {
    
  },

  //caching , invalidation, Polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      recipeApi.middleware,
      mealApi.middleware
    ]),
});