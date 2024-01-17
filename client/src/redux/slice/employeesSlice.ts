import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EmployeeType } from '../services/employees'

type EmployeesState = {
    employees: EmployeeType[]
    length: number
    searchValue: string
}

const initialState: EmployeesState = {
    employees: [],
    length: 0,
    searchValue: '',
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
    },
})

export const { updateEmployees, updateLength, updateSearchValue } =
    employeesSlice.actions

export default employeesSlice.reducer
