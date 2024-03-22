import { api } from './api'

export type NewUserType = {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
}

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation<Response, Partial<NewUserType>>({
            query: (body) => ({
                url: 'users/register/',
                method: 'POST',
                body,
            }),
            transformErrorResponse: (response) => response.data,
        }),
    }),
})

export const { useRegisterUserMutation } = usersApi
