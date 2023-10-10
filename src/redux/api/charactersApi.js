import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("accept-language", "it");
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({page}) => {
        return {
          url: `https://swapi.dev/api/people/?page=${page}`,
          method: "get"
        };
      }
    })
  })
});

export const { useGetCharactersQuery } = charactersApi;
