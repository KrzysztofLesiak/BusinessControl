import { Link } from 'react-router-dom'

import { useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { Loading } from '../../../components/Loading'
import { useEmployees } from '../../../hooks/useEmployees'

import Arrow from '../../../assets/arrow-right-solid.svg?react'

export const EmployeesDashboard = () => {
    const length = useAppSelector((state: RootState) => state.employees.length)

    const { isEmployeesLoading, isEmployeesSuccess } = useEmployees()

    return (
        <div className="mx-auto flex h-full w-full min-w-[240px] flex-col justify-between rounded-3xl bg-secondary-light p-6 shadow-xl">
            <h2 className="mb-10 flex items-center justify-between text-2xl font-bold text-quartiary-light">
                Employees
                <Link to="/employees">
                    <Arrow className="h-auto w-6 text-quartiary-light" />
                </Link>
            </h2>
            <div>
                {isEmployeesLoading && <Loading />}
                {isEmployeesSuccess && (
                    <>
                        <p className="flex items-center justify-between text-lg leading-none text-quartiary-light">
                            Numbers of active employees:{' '}
                            <span className=" p border-blue3-dark  ml-2 border-b-4 p-2">
                                {length}
                            </span>
                        </p>
                        <div className="flex flex-wrap justify-around">
                            <Link
                                to="/employees/new"
                                className="mt-6 inline-block w-full rounded-2xl border-4 border-quartiary-light bg-none p-2 text-center  hover:bg-quartiary-light hover:text-white"
                            >
                                Add Employee
                            </Link>
                            <Link
                                to="/employees"
                                className="hover:bg-blue3-light mt-4 inline-block  w-full rounded-2xl border-4 border-quartiary-light  bg-quartiary-light p-2 text-center text-white"
                            >
                                Employee List
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
