import { Link } from 'react-router-dom'

import Arrow from '../../assets/arrow-right-solid.svg?react'
import { Clock } from './Clock'

export const Home = () => {
    return (
        <section className="h-full overflow-y-auto px-8">
            <Clock />
            <div className="mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2 xl:grid-cols-3 ">
                <div className="mx-auto flex h-auto w-full min-w-[240px] flex-col justify-between rounded-3xl bg-white p-6 shadow-xl">
                    <h2 className="mb-10 flex items-center justify-between text-2xl font-bold text-blue3-dark">
                        Employees
                        <Link to="/employees">
                            <Arrow className="h-auto w-6" />
                        </Link>
                    </h2>
                    <div>
                        <p
                            className="flex items-center justify-between text-lg leading-snug
                        "
                        >
                            Numbers of employees:{' '}
                            <span className="ml-2 rounded-full border-4 border-blue3-dark p-2">
                                40
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
                    </div>
                </div>
            </div>
        </section>
    )
}
