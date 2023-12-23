import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://127.0.0.1:8000/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Employees"],
  endpoints: () => ({}),
});
