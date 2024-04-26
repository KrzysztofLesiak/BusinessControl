import XMark from '../../../assets/xmark-solid.svg?react'

type TotalIncomeProps = {
    totalIncome: number | undefined
}

export const TotalIncome = ({ totalIncome }: TotalIncomeProps) => {
    return (
        <div className="col-span-2 w-full rounded-3xl bg-secondary-light p-4">
            <div className="mb-2 flex h-8 items-center justify-between">
                <div className="flex items-center">
                    <h2 className="text-lg font-bold text-quartiary-light">
                        Total Income
                    </h2>
                    <select className="ml-2 h-8 rounded-full pl-1 text-sm">
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
            <div
                className="relative h-48 
            w-full rounded-2xl bg-white p-2"
            >
                <div>
                    {totalIncome ? (
                        <>
                            <span
                                className={`text-xl font-bold tracking-widest ${
                                    totalIncome > 0
                                        ? 'text-success'
                                        : 'text-error'
                                }`}
                            >
                                {totalIncome ? '$ ' + totalIncome : '$____.__'}
                            </span>
                            <span className="ml-4 rounded-full bg-success bg-opacity-30 px-2 py-1 text-sm text-success">
                                +14.2%
                            </span>
                        </>
                    ) : (
                        <span>$ _____.__</span>
                    )}
                </div>
                <div className="absolute bottom-8 left-0 flex w-full justify-evenly align-bottom">
                    <div
                        className={`h-5 w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                    <div
                        className={`h-12 w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                    <div
                        className={`h-24 w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                    <div
                        className={`h-24 w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                    <div
                        className={`h-12 w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                    <div
                        className={`h-[100px] w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                    <div
                        className={`h-[80px] w-[10%] self-end rounded-t-md bg-tiertary-light transition-all hover:bg-quartiary-light`}
                    ></div>
                </div>
                <div className="absolute bottom-2 left-0 flex w-full justify-evenly text-center text-sm">
                    <div className="w-[10%]">Mon</div>
                    <div className="w-[10%]">Tue</div>
                    <div className="w-[10%]">Wed</div>
                    <div className="w-[10%]">Thu</div>
                    <div className="w-[10%]">Fri</div>
                    <div className="w-[10%]">Sat</div>
                    <div className="w-[10%]">Sun</div>
                </div>
            </div>
        </div>
    )
}
