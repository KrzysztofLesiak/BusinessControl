import { Link, useNavigate } from 'react-router-dom'

import { useEmployees } from '../../../hooks/useEmployees'

import Chevron from '../../../assets/chevron-up-solid.svg?react'

export const EmployeeTable = () => {
    const {
        employees,
        isEmployeesError,
        isEmployeesLoading,
        isEmployeesSuccess,
    } = useEmployees()

    const navigate = useNavigate()

    const handleNavigate = (id: number) => navigate(`/employees/${id}`)

    return (
        <>
            {isEmployeesLoading && <p className="m-auto">Loading...</p>}
            {isEmployeesSuccess && (
                <>
                    {employees && (
                        <table className="mx-auto w-full table-auto overflow-hidden rounded-xl border border-blue1-light shadow-xl">
                            <thead className=" bg-blue1-light ">
                                <tr>
                                    <th>
                                        <span className="flex w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3">
                                            Id <Chevron />
                                        </span>
                                    </th>
                                    <th>
                                        <span className="flex w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3">
                                            <p>
                                                <span className="hidden md:inline">
                                                    First{' '}
                                                </span>
                                                Name
                                            </p>
                                            <Chevron />
                                        </span>
                                    </th>
                                    <th className="hidden md:table-cell">
                                        <span className="hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                            Last Name <Chevron />
                                        </span>
                                    </th>
                                    <th className="hidden sm:table-cell">
                                        <span className="hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                            Position <Chevron />
                                        </span>
                                    </th>
                                    <th className="hidden sm:table-cell">
                                        <span className="hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                            Salary <Chevron />
                                        </span>
                                    </th>
                                    <th className="hidden sm:table-cell">
                                        <span className="hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                            Status <Chevron />
                                        </span>
                                    </th>
                                    <th className="hidden sm:table-cell">
                                        <span>Action</span>
                                    </th>
                                    <th className="p-3 sm:hidden">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr
                                        className="\bg-white border-b border-blue1-light bg-white text-sm hover:bg-grey-light"
                                        key={employee.id}
                                        onClick={() =>
                                            handleNavigate(employee.id!)
                                        }
                                        data-testid={`employee-${employee.id}`}
                                    >
                                        <td className="p-3 text-center">
                                            {employee.id}
                                        </td>
                                        <td className="flex-col p-3">
                                            <p>{employee.firstName}</p>
                                            <p className="md:hidden">
                                                {employee.lastName}
                                            </p>
                                        </td>
                                        <td className="hidden p-3 md:table-cell">
                                            {employee.lastName}
                                        </td>
                                        <td className="hidden p-3 sm:table-cell">
                                            {/*employee.position*/}
                                        </td>
                                        <td className="hidden p-3 text-center sm:table-cell">
                                            {employee.salary}
                                        </td>
                                        <td className="hidden p-3 text-center sm:table-cell">
                                            <p
                                                className={` ${
                                                    employee.status === 'HI'
                                                        ? 'bg-success'
                                                        : employee.status ===
                                                            'FI'
                                                          ? 'bg-error'
                                                          : 'bg-warning'
                                                }
                                              rounded-full text-white`}
                                            >
                                                {employee.status === 'HI'
                                                    ? 'Hired'
                                                    : employee.status === 'FI'
                                                      ? 'Fired'
                                                      : 'Holidays'}
                                            </p>
                                        </td>
                                        <td className="hidden p-3 text-center sm:table-cell">
                                            <Link
                                                to={`/employees/${employee.id}`}
                                            >
                                                Go to
                                            </Link>
                                        </td>
                                        <td className="p-3 text-center sm:hidden">
                                            <p>{/*employee.position*/}</p>
                                            <p>{employee.salary}</p>
                                            <p
                                                className={` ${
                                                    employee.status === 'HI'
                                                        ? 'bg-success'
                                                        : employee.status ===
                                                            'FI'
                                                          ? 'bg-error'
                                                          : 'bg-warning'
                                                } mx-auto
                                              w-fit rounded-full
                                              px-3 py-1 text-white`}
                                            >
                                                {employee.status === 'HI'
                                                    ? 'Hired'
                                                    : employee.status === 'FI'
                                                      ? 'Fired'
                                                      : 'Holidays'}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            )}
            {isEmployeesError && (
                <p className="m-auto">
                    Something went wrong while fetching data
                </p>
            )}
        </>
    )
}
