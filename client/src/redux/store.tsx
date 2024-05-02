import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api'
import { employeesSlice } from './slice/employeesSlice'
import { usersSlice } from './slice/usersSlice'
import { financeSlice } from './slice/financeSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        employees: employeesSlice.reducer,
        users: usersSlice.reducer,
        finance: financeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
