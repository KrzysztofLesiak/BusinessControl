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
            <h2 className="text-quartiary-light mb-10 flex items-center justify-between text-2xl font-bold">
                Employees
                <Link to="/employees">
                    <Arrow className="text-quartiary-light h-auto w-6" />
                </Link>
            </h2>
            <div>
                {isEmployeesLoading && <Loading />}
                {isEmployeesSuccess && (
                    <>
                        <p className="text-quartiary-light flex items-center justify-between text-lg leading-none">
                            Numbers of active employees:{' '}
                            <span className=" p ml-2  border-b-4 border-blue3-dark p-2">
                                {length}
                            </span>
                        </p>
                        <div className="flex flex-wrap justify-around">
                            <Link
                                to="/employees/new"
                                className="border-quartiary-light hover:bg-quartiary-light mt-6 inline-block w-full rounded-2xl border-4 bg-none p-2  text-center hover:text-white"
                            >
                                Add Employee
                            </Link>
                            <Link
                                to="/employees"
                                className="border-quartiary-light bg-quartiary-light mt-4  inline-block w-full rounded-2xl border-4  p-2 text-center text-white hover:bg-blue3-light"
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
