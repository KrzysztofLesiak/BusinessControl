import { Link } from 'react-router-dom'

import Arrow from '../../../assets/arrow-right-solid.svg?react'

export const FinancesDashboard = () => {
    return (
        <div className="mx-auto flex h-full w-full min-w-[240px] flex-col justify-between rounded-3xl bg-white p-6 shadow-xl xl:col-span-2">
            <div className="mb-10 flex h-fit w-full justify-between">
                <div className="flex">
                    <h2 className=" flex items-center justify-between text-2xl font-bold text-blue3-dark">
                        Finance
                    </h2>
                    <select className="mx-6 my-auto h-fit rounded-full bg-blue1-light p-2">
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
    )
}
