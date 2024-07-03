import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CycleContentItem } from "../../types";

interface AddContentInput {
  subcategoryId: string;
  name: string;
}

const contentsApi = createApi({
  reducerPath: "contents",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/contents",
  }),
  endpoints(builder) {
    return {
      addContent: builder.mutation<CycleContentItem, AddContentInput>({
        query: ({ subcategoryId, name }) => {
          return {
            method: "POST",
            url: "/",
            body: {
              subcategoryId,
              name,
            },
          };
        },
      }),
    };
  },
});

export const { useAddContentMutation } = contentsApi;
export { contentsApi };
