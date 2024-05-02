import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import XMark from '../../../../assets/xmark-solid.svg?react'

ChartJS.register(ArcElement, Tooltip)

type TotalExpensesProps = {
    totalExpenses: number | undefined
}

const data = {
    datasets: [
        {
            data: [12, 19, 3, 5],
            backgroundColor: ['#385784', '#B1C9EF', '#D7E2F6', '#F0F3FA'],
            borderColor: ['#385784', '#385784', '#385784', '#385784'],
            borderWidth: 1,
            borderRadius: 10,
            spacing: 0,
            offset: 20,
        },
    ],
}

export const TotalExpenses = ({ totalExpenses }: TotalExpensesProps) => {
    return (
        <div className="col-span-2 rounded-3xl border-4 border-secondary-light bg-white p-4">
            <div className="mb-2 flex h-8 items-center justify-between">
                <div className="flex items-center">
                    <h2 className="text-lg font-bold text-quartiary-light">
                        Total Expenses
                    </h2>
                    <select className="ml-2 h-8 rounded-full border-2 border-tiertary-light pl-1 text-xs">
                        <option value="lastYear">Last Year</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="lastWeek">Last Week</option>
                        <option value="lastDay">Last Day</option>
                    </select>
                </div>
                <div className="rounded-full bg-tiertary-light p-2">
                    <XMark className="h-4 w-4 rotate-45 text-quartiary-light" />
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="">
                    {totalExpenses ? (
                        <span className={`text-xl font-bold`}>
                            {totalExpenses ? '$ ' + totalExpenses : '$____.__'}
                        </span>
                    ) : (
                        <span>$ _____.__</span>
                    )}
                    <ul className="mt-6">
                        <li className="m-2 flex items-center text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-quartiary-light"></div>
                            Category
                        </li>
                        <li className="m-2 flex items-center text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-tiertary-light"></div>
                            Category
                        </li>
                        <li className="m-2 flex items-center text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-secondary-light"></div>
                            Category
                        </li>
                        <li className="m-2 flex items-center text-sm">
                            <div className="mr-2 h-2 w-2 rounded-full bg-navGradient"></div>
                            Category
                        </li>
                    </ul>
                </div>
                <div className="h-44 w-44">
                    <Doughnut data={data} />
                </div>
            </div>
        </div>
    )
}
