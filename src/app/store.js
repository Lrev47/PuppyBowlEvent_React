// Import configureStore from Redux Toolkit to create a Redux store
import { configureStore } from "@reduxjs/toolkit";

// Import the API service and its hooks
import { puppyBowlApi } from "../api/puppyBowlApi";

// Create the Redux store
export const store = configureStore({
  // Add the API service's reducer to the store
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  // Add the API service's middleware to the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

// Export the store as the default export
export default store;
