import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EmployeeType } from '../services/employees'

type EmployeesState = {
    employees: EmployeeType[]
    length: number
    searchValue: string
    page: number
    maxPage: number
}

const initialState: EmployeesState = {
    employees: [],
    length: 0,
    searchValue: '',
    page: 1,
    maxPage: 1,
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        updateEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
            state.employees = action.payload
        },
        updateLength: (state, action: PayloadAction<number>) => {
            state.length = action.payload
        },
        updateSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        nextPage: (state) => {
            if (state.page < state.maxPage) state.page += 1
        },
        prevPage: (state) => {
            if (state.page !== 1) state.page -= 1
        },
        updatePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        updateMaxPage: (state, action: PayloadAction<number>) => {
            state.maxPage = action.payload
        },
    },
})

export const {
    updateEmployees,
    updateLength,
    updateSearchValue,
    nextPage,
    prevPage,
    updatePage,
    updateMaxPage,
} = employeesSlice.actions

export default employeesSlice.reducer
