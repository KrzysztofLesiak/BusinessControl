import { Link, Route, Routes } from 'react-router-dom'

import Arrow from '../../assets/arrow-right-solid.svg?react'

import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { useEmployees } from '../../hooks/useEmployees'
import { Loading } from '../../components/Loading'

import { Employees } from '../Employees'
import { NewEmployee } from '../Employees/NewEmployee'

export const Home = () => {
    const length = useAppSelector((state: RootState) => state.employees.length)

    const { isEmployeesLoading, isEmployeesSuccess } = useEmployees()

    return (
        <section className="h-full overflow-y-auto p-8">
            <div className="mx-auto grid h-full grid-cols-1 grid-rows-[300px_minmax(900px,_1fr)_100px] gap-8 p-4 md:grid-cols-2 xl:grid-cols-3 ">
                <div className="mx-auto flex h-full w-full min-w-[240px] flex-col justify-between rounded-3xl bg-white p-6 shadow-xl">
                    <h2 className="mb-10 flex items-center justify-between text-2xl font-bold text-blue3-dark">
                        Employees
                        <Link to="/employees">
                            <Arrow className="h-auto w-6" />
                        </Link>
                    </h2>
                    <div>
                        {isEmployeesLoading && <Loading />}
                        {isEmployeesSuccess && (
                            <>
                                <p
                                    className="flex items-center justify-between text-lg leading-none
                            "
                                >
                                    Numbers of active employees:{' '}
                                    <span className=" p ml-2  border-b-4 border-blue3-dark p-2">
                                        {length}
                                    </span>
                                </p>
                                <div className="flex flex-wrap justify-around">
                                    <Link
                                        to="/employees/new"
                                        className="mt-6 inline-block w-full rounded-2xl border-4 border-secondary-light bg-none p-2 text-center  hover:bg-secondary-light hover:text-white"
                                    >
                                        Add Employee
                                    </Link>
                                    <Link
                                        to="/employees"
                                        className="mt-4 inline-block w-full  rounded-2xl border-4 border-secondary-light bg-secondary-light  p-2 text-center text-white hover:bg-blue3-light"
                                    >
                                        Employee List
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/new" element={<NewEmployee />} />
                <Route path="/employees/:id" element={<Employees />} />
            </Routes>
        </section>
    )
}
