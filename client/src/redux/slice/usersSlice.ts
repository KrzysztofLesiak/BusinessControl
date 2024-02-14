import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UserType = {
    token_type: string
    exp: number
    iat: number
    jti: string
    user_id: number
    first_name: string
}

type UsersState = {
    isAuthenticated: boolean
    isLoading: boolean
    user: UserType
    token: string
}

const initialState: UsersState = {
    isAuthenticated: false,
    isLoading: true,
    user: {
        token_type: '',
        exp: 0,
        iat: 0,
        jti: '',
        user_id: 0,
        first_name: '',
    },
    token: '',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        logoutUser: (state) => {
            state.user = initialState.user
            state.isAuthenticated = false
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
    },
})

export const { loginUser, logoutUser, setIsLoading, setToken } =
    usersSlice.actions

export default usersSlice.reducer
