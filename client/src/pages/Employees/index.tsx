import { Link } from 'react-router-dom'
import { EmployeeTable } from './EmployeeTable'
import Filter from '../../assets/filter-solid.svg?react'

export const Employees = () => {
    return (
        <section className="flex h-full w-full flex-col p-8">
            <div className="m-auto w-full">
                <div className=" mb-4 flex flex-col-reverse justify-between sm:flex-row">
                    <div className="relative flex  w-full rounded-xl shadow-md sm:m-0 sm:w-fit">
                        <input
                            type="search"
                            className="sm: z-10 mr-24 w-full rounded-xl border-2 border-blue1-light
                        px-4 py-1 text-sm outline-secondary-light sm:w-fit"
                            placeholder="Search"
                        />
                        <span className="absolute right-0 flex h-full w-2/4 flex-row items-center justify-end rounded-xl bg-blue1-light py-1 pl-6 text-right text-sm">
                            Filter <Filter className="mx-3" />
                        </span>
                    </div>
                    <Link
                        className="mx-auto my-4 h-full w-full rounded-xl bg-blue1-light px-8 py-1.5 text-center align-middle text-sm shadow-md sm:m-0 sm:w-fit"
                        to="/employees/new"
                    >
                        Add Employee
                    </Link>
                </div>
                <EmployeeTable />
            </div>
        </section>
    )
}
