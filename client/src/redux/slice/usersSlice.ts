import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UsersState = {
    authTokens: {
        access: string
        refresh: string
    }
    username: string
}

const initialState: UsersState = {
    authTokens: {
        access: '',
        refresh: '',
    },
    username: '',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setTokens: (
            state,
            action: PayloadAction<{
                access: string
                refresh: string
            }>
        ) => {
            state.authTokens = action.payload
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
    },
})

export const { setTokens } = usersSlice.actions

export default usersSlice.reducer
