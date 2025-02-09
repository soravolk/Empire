import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ShortTermItem } from "../../types";

interface CreateShortTermInput {
  userId: string;
}

const shortTermsApi = createApi({
  reducerPath: "shortTerms",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/shortTerms",
  }),
  endpoints(builder) {
    return {
      createShortTerm: builder.mutation<ShortTermItem, CreateShortTermInput>({
        query: ({ userId }) => {
          return {
            method: "POST",
            url: "/",
            body: {
              userId,
            },
          };
        },
      }),
    };
  },
});

export const { useCreateShortTermMutation } = shortTermsApi;
export { shortTermsApi };
