import { Link, useNavigate } from 'react-router-dom'
import { useEmployees } from '../../../hooks/useEmployees'
import { useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { Loading } from '../../../components/Loading'

import Chevron from '../../../assets/chevron-up-solid.svg?react'
import { useEffect } from 'react'

export const EmployeeTable = () => {
    const employees = useAppSelector(
        (state: RootState) => state.employees.employees
    )
    const {
        isEmployeesError,
        isEmployeesLoading,
        isEmployeesSuccess,
        isEmployeesFetching,
        employeesSortBy,
        handleSortBy,
    } = useEmployees()
    const navigate = useNavigate()

    const handleNavigate = (id: number) => navigate(`/employees/${id}`)

    useEffect(() => {
        console.log(employeesSortBy)
    }, [employeesSortBy])

    return (
        <>
            <table
                className={`mx-auto w-full table-auto overflow-hidden border border-blue1-light shadow-xl transition-all duration-1000 ${
                    isEmployeesLoading ||
                    isEmployeesFetching ||
                    employees.length === 0
                        ? 'rounded-t-xl'
                        : 'rounded-xl'
                }`}
            >
                <thead className="bg-blue1-light">
                    <tr>
                        <th onClick={() => handleSortBy('id')}>
                            <span className="relative flex w-full flex-row items-center justify-center border-r-2 border-blue2-light p-3">
                                Id{' '}
                                <Chevron
                                    className={`${
                                        employeesSortBy.match('id')
                                            ? employeesSortBy.match('-id')
                                                ? 'absolute rotate-180'
                                                : 'absolute'
                                            : 'hidden'
                                    } right-1`}
                                />
                            </span>
                        </th>
                        <th onClick={() => handleSortBy('firstName')}>
                            <span className="relative flex w-full flex-row items-center justify-center border-r-2 border-blue2-light p-3">
                                <p>
                                    <span className="hidden md:inline">
                                        First{' '}
                                    </span>
                                    Name
                                </p>
                                <Chevron
                                    className={`${
                                        employeesSortBy.match('firstName')
                                            ? employeesSortBy.match(
                                                  '-firstName'
                                              )
                                                ? 'absolute rotate-180'
                                                : 'absolute'
                                            : 'hidden'
                                    } right-1`}
                                />
                            </span>
                        </th>
                        <th
                            className="hidden md:table-cell"
                            onClick={() => handleSortBy('lastName')}
                        >
                            <span className="relative hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                Last Name{' '}
                                <Chevron
                                    className={`${
                                        employeesSortBy.match('lastName')
                                            ? employeesSortBy.match('-lastName')
                                                ? 'absolute rotate-180'
                                                : 'absolute'
                                            : 'hidden'
                                    } right-1`}
                                />
                            </span>
                        </th>
                        <th
                            className="hidden sm:table-cell"
                            onClick={() => handleSortBy('position')}
                        >
                            <span className="relative hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                Position{' '}
                                <Chevron
                                    className={`${
                                        employeesSortBy.match('position')
                                            ? employeesSortBy.match('-position')
                                                ? 'absolute rotate-180'
                                                : 'absolute'
                                            : 'hidden'
                                    } right-1`}
                                />
                            </span>
                        </th>
                        <th
                            className="hidden sm:table-cell"
                            onClick={() => handleSortBy('salary')}
                        >
                            <span className="relative hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                Salary{' '}
                                <Chevron
                                    className={`${
                                        employeesSortBy.match('salary')
                                            ? employeesSortBy.match('-salary')
                                                ? 'absolute rotate-180'
                                                : 'absolute'
                                            : 'hidden'
                                    } right-1`}
                                />
                            </span>
                        </th>
                        <th
                            className="hidden sm:table-cell"
                            onClick={() => handleSortBy('status')}
                        >
                            <span className="relative hidden w-full flex-row items-center justify-around border-r-2 border-blue2-light p-3 sm:flex">
                                Status{' '}
                                <Chevron
                                    className={`${
                                        employeesSortBy.match('status')
                                            ? employeesSortBy.match('-status')
                                                ? 'absolute rotate-180'
                                                : 'absolute'
                                            : 'hidden'
                                    } right-1`}
                                />
                            </span>
                        </th>
                        <th className="hidden sm:table-cell">
                            <span>Action</span>
                        </th>
                        <th className="p-3 sm:hidden">Details</th>
                    </tr>
                </thead>
                <tbody className="relative">
                    {isEmployeesSuccess &&
                        employees.map((employee) => (
                            <tr
                                className="\bg-white border-b border-blue1-light bg-white text-sm hover:bg-grey-light"
                                key={employee.id}
                                onClick={() => handleNavigate(employee.id!)}
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
                                                : employee.status === 'FI'
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
                                    <Link to={`/employees/${employee.id}`}>
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
                                                : employee.status === 'FI'
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
            {employees.length === 0 && isEmployeesSuccess && (
                <div className="w-full rounded-b-xl bg-white p-4 text-center">
                    No employees
                </div>
            )}

            {isEmployeesLoading && (
                <div className="w-full rounded-b-xl bg-white">
                    <Loading />
                </div>
            )}
            {isEmployeesError && (
                <p className="m-auto">
                    Something went wrong while fetching data
                </p>
            )}
        </>
    )
}
