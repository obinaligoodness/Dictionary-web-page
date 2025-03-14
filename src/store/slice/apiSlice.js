import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.dictionaryapi.dev/api/v2" }),
  endpoints: (builder) => ({
    getDictionary: builder.query({
      query: (word) => `/entries/en/${word}`,
    }),
  }),
});

export const { useGetDictionaryQuery } = apiSlice;
export default apiSlice;
