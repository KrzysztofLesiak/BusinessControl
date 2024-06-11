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
    salary: number | string
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
    token: string
}

export const employeesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getEmployees: build.query<EmployeesResponse, EmployeesQuery>({
            query: ({ searchValue, employeesSortBy, page, token }) => ({
                url: `employees/?search=${searchValue}&page=${page}&ordering=${employeesSortBy}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
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
        getEmployee: build.query<EmployeeType, { id: number; token: string }>({
            query: ({ id, token }) => ({
                url: `employees/${id}/`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: (_result, _error, { id }) => [
                { type: 'Employees', id },
            ],
        }),
        addEmployee: build.mutation<
            EmployeeType,
            { body: EmployeeType; token: string }
        >({
            query: ({ body, token }) => ({
                url: 'employees/',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body,
            }),
            invalidatesTags: ['Employees'],
        }),
        editEmployee: build.mutation<
            EmployeeType,
            { body: EmployeeType; token: string }
        >({
            query: ({ body, token }) => ({
                url: `employees/${body.id}/`,
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body,
            }),
            invalidatesTags: (_result, _error, { body }) => [
                { type: 'Employees', id: body.id },
            ],
        }),
        deleteEmployee: build.mutation<
            { success: boolean; id: number },
            { id: number; token: string }
        >({
            query: ({ id, token }) => ({
                url: `employees/${id}/`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
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
