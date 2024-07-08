// Import the createApi and fetchBaseQuery functions from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base URL for the API
const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web";

// Create an API service using createApi
export const puppyBowlApi = createApi({
  // Define a unique identifier for this API service
  reducerPath: "puppyBowlApi",
  // Define the base query function for the API service
  baseQuery: fetchBaseQuery({ baseUrl }),
  // Define the endpoints for the API service
  endpoints: (builder) => ({
    // Define a query endpoint to fetch the players
    getPlayers: builder.query({
      query: () => `/players`,
    }),
  }),
});

// Export the hook for the getPlayers query endpoint
export const { useGetPlayersQuery } = puppyBowlApi;
