import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const options = {
    responsive: true,
    cubicInterpolationMode: 'monotone',
    maintainAspectRatio: false,
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            display: false,
            ticks: {
                callback: (value: string | number) => {
                    return '$ ' + value
                },
            },
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        tooltip: {
            callbacks: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                label: (context: any) => {
                    let label = context.dataset.label || ''

                    if (label) {
                        label += ': '
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(context.parsed.y)
                    }
                    return label
                },
            },
        },
    },
}
const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const data = {
    labels: labels,
    datasets: [
        {
            data: [65, 59, 80, 81, 56, 55, 40, 1444, 44, 4124, 4424, 1441],
            borderColor: '#6A99DD',
        },
    ],
}

export const FinanceChart = () => {
    return (
        <div className="flex h-96 w-full overflow-hidden rounded-3xl border-4 border-secondary-light bg-white xl:col-span-6">
            <div className="relative w-1/3 overflow-hidden border-r-4 border-tiertary-light bg-quartiary-light bg-gradient-to-bl from-quartiary-light from-30% to-navGradient p-4">
                <div className="absolute -bottom-32 -left-28 flex h-64 w-64 items-center justify-center rounded-full bg-secondary-light ">
                    <div className="h-52 w-52 rounded-full bg-white"></div>
                </div>
                <div className="absolute -right-24 -top-14 flex h-64 w-64 items-center justify-center rounded-full bg-secondary-light">
                    <div className="h-52 w-52 rounded-full bg-white"></div>
                </div>
                <div className="absolute flex">
                    <h2 className="w-[50%] text-xl font-bold text-white">
                        Last Year
                    </h2>
                    <select className="ml-2 h-8 rounded-full border-2 border-tiertary-light pl-1 text-xs">
                        <option value="lastYear">Last Year</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="lastWeek">Last Week</option>
                        <option value="lastDay">Last Day</option>
                    </select>
                </div>
                <div className="absolute top-16 flex h-36 w-36 flex-col items-center justify-center rounded-full border-8 border-tiertary-light bg-primary-light text-center ">
                    <p className="text-2xl text-dark">Profit</p>
                    <p className="text-dark">$ 44043.42</p>
                </div>
                <div className="absolute left-40 top-1/3 flex h-28 w-28 flex-col items-center justify-center rounded-full border-8 border-tiertary-light bg-primary-light text-center ">
                    <p className="text-2xl text-dark">Income</p>
                    <p className="text-dark">$ 44043.42</p>
                </div>
                <div className="absolute left-24 top-[63%] flex h-32 w-32 flex-col items-center justify-center rounded-full border-8 border-tiertary-light bg-primary-light text-center ">
                    <p className="text-2xl text-dark">Expense</p>
                    <p className="text-dark">$ 44043.42</p>
                </div>
            </div>
            <div className="relative flex w-2/3 items-center justify-center">
                <Line data={data} options={options} className="w-full p-4" />
            </div>
        </div>
    )
}
