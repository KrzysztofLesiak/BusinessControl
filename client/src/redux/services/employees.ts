import { api } from "./api";

export type EmployeeType = {
  id?: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  street: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
  status: string;
  salary: number;
};

type EmployeesResponse = EmployeeType[];

export const employeesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<EmployeesResponse, void>({
      query: () => ({ url: "employees/" }),
    }),
    getEmployee: build.query<EmployeeType, number>({
      query: (id) => ({ url: `employees/${id}/` }),
    }),
    addEmployee: build.mutation<EmployeeType, Partial<EmployeeType>>({
      query: (body) => ({
        url: "employees/",
        method: "POST",
        body,
      }),
    }),
    editEmployee: build.mutation<EmployeeType, Partial<EmployeeType>>({
      query: (body) => ({
        url: `employees/${body.id}/`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useAddEmployeeMutation,
  useEditEmployeeMutation,
} = employeesApi;
