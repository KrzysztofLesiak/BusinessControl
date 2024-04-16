import { Link } from 'react-router-dom'

import Arrow from '../../assets/arrow-right-solid.svg?react'

import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { useEmployees } from '../../hooks/useEmployees'
import { Loading } from '../../components/Loading'

export const Home = () => {
    const length = useAppSelector((state: RootState) => state.employees.length)

    const { isEmployeesLoading, isEmployeesSuccess } = useEmployees()

    return (
        <section>
            <div className="mx-auto grid h-full grid-cols-1 grid-rows-[300px] gap-8 pb-6 md:grid-cols-2 xl:grid-cols-3 ">
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
                <div className="mx-auto flex h-full w-full min-w-[240px] flex-col justify-between rounded-3xl bg-white p-6 shadow-xl xl:col-span-2">
                    <div className="mb-10 flex h-fit w-full justify-between">
                        <div className="flex">
                            <h2 className=" flex items-center justify-between text-2xl font-bold text-blue3-dark">
                                Finance
                            </h2>
                            <select className="mx-4 my-auto h-fit rounded-2xl border-2 border-secondary-light p-2 outline-secondary-light ">
                                <option value="lastYear">Last Year</option>
                                <option value="lastMonth">Last Month</option>
                                <option value="lastWeek">Last Week</option>
                                <option value="lastDay">Last Day</option>
                            </select>
                        </div>
                        <Link className="float-right" to="/finance">
                            <Arrow className="h-auto w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
