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
    user: UserType
}

const initialState: UsersState = {
    user: {
        token_type: '',
        exp: 0,
        iat: 0,
        jti: '',
        user_id: 0,
        first_name: '',
    },
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = initialState.user
        },
    },
})

export const { loginUser, logoutUser } = usersSlice.actions

export default usersSlice.reducer
