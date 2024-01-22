import { api } from './api'

export type EmployeeType = {
    id?: number
    firstName: string
    lastName: string
    birthDate: string
    street: string
    city: string
    postalCode: string
    phoneNumber: string
    position: string
    status: string
    salary: number
}

type EmployeesResponse = {
    employees: EmployeeType[]
    length: number
    maxPage: number
}

type EmployeesQuery = {
    searchValue: string
    employeesSortBy: string
    page: number
}

export const employeesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getEmployees: build.query<EmployeesResponse, EmployeesQuery>({
            query: ({ searchValue, employeesSortBy, page }) => ({
                url: `employees/?search=${searchValue}&page=${page}&ordering=${employeesSortBy}`,
            }),
            providesTags: (result) =>
                result
                    ? [
                          ...result.employees.map(
                              ({ id }) => ({ type: 'Employees', id }) as const
                          ),
                          { type: 'Employees', id: 'LIST' },
                      ]
                    : [{ type: 'Employees', id: 'LIST' }],
        }),
        getEmployee: build.query<EmployeeType, number>({
            query: (id) => ({ url: `employees/${id}/` }),
            providesTags: (_result, _error, id) => [{ type: 'Employees', id }],
        }),
        addEmployee: build.mutation<EmployeeType, Partial<EmployeeType>>({
            query: (body) => ({
                url: 'employees/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Employees'],
        }),
        editEmployee: build.mutation<EmployeeType, Partial<EmployeeType>>({
            query: (body) => ({
                url: `employees/${body.id}/`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: 'Employees', id },
            ],
        }),
        deleteEmployee: build.mutation<
            { success: boolean; id: number },
            number
        >({
            query: (id) => ({
                url: `employees/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Employees'],
        }),
    }),
})

export const {
    useGetEmployeesQuery,
    useGetEmployeeQuery,
    useAddEmployeeMutation,
    useEditEmployeeMutation,
    useDeleteEmployeeMutation,
} = employeesApi
