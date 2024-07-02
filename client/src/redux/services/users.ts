import { api } from './api'

interface User {
    email: string
    password: string
}
export interface NewUser extends User {
    confirmPassword: string
    firstName: string
    lastName: string
}

interface LoginResponse {
    refresh: string
    access: string
}

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getToken: build.mutation<LoginResponse, User>({
            query: (body) => ({
                url: 'users/token/',
                method: 'POST',
                body,
            }),
        }),
        registerUser: build.mutation<Response, NewUser>({
            query: (body) => ({
                url: 'users/register/',
                method: 'POST',
                body,
            }),
            transformErrorResponse: (response) => response.data,
        }),
    }),
})

export const { useGetTokenMutation, useRegisterUserMutation } = usersApi
