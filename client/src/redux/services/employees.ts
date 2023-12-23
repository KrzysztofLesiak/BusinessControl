import { api } from "./api";

export type errMsgType = {
  detail: string;
};

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
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useAddEmployeeMutation,
} = employeesApi;
