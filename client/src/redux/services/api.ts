import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiURL = 'http://127.0.0.1:8000/api/'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
    tagTypes: ['Employees', 'Users', 'Finance'],
    endpoints: () => ({}),
})
