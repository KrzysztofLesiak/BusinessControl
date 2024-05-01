import { Loading } from '../../../components/Loading'
import { Transaction } from '../../../redux/services/finance'

import Filter from '../../../assets/filter-solid.svg?react'
import Add from '../../../assets/xmark-solid.svg?react'
import Edit from '../../../assets/edit.svg?react'
import Delete from '../../../assets/delete.svg?react'
import Loader from '../../../assets/spinner-solid.svg?react'

type IncomeProps = {
    incomesList: Transaction[] | undefined
    incomeInputs: Transaction
    isAddLoading: boolean
    isTransactionsFetching: boolean
    isTransactionsLoading: boolean
    isTransactionsError: boolean
    isTransactionsSuccess: boolean
    handleIncomeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleIncomeSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Incomes = ({
    incomesList,
    incomeInputs,
    isAddLoading,
    isTransactionsFetching,
    isTransactionsLoading,
    isTransactionsError,
    isTransactionsSuccess,
    handleIncomeInput,
    handleIncomeSubmit,
}: IncomeProps) => {
    return (
        <div className="col-span-3 w-full rounded-3xl border-4 border-secondary-light bg-white p-4 transition-all">
            <div className="flex items-center">
                <h2 className="text-3xl">Incomes</h2>
                <div className="ml-4 flex rounded-xl bg-secondary-light text-sm">
                    <input
                        className="m-1 rounded-lg p-1 pl-4"
                        type="search"
                        placeholder="Search"
                        name="incomeSearch"
                    />
                    <div className="mx-2 flex items-center">
                        <p className="mr-2">Filter</p>
                        <Filter />
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleIncomeSubmit}
                className="text-md my-4 flex w-full overflow-hidden rounded-xl bg-[#F4F4F4] p-2 text-sm"
            >
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] text-center outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={incomeInputs.name}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] text-center outline-none"
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={incomeInputs.category}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] text-center outline-none"
                    type="text"
                    name="indetifier"
                    placeholder="Payment ID"
                    value={incomeInputs.indetifier}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-6 text-center outline-none"
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    step="0.1"
                    min="0"
                    value={incomeInputs.amount}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <div className="w-[12%] text-center">
                    <button
                        type="submit"
                        className="h-6 w-6 rounded-full hover:bg-dark hover:bg-opacity-20"
                        disabled={isAddLoading}
                        aria-label="Add Income"
                    >
                        {isAddLoading ? (
                            <Loader className="m-auto h-4 w-4 animate-spin" />
                        ) : (
                            <Add className="m-auto h-4 w-4 rotate-45" />
                        )}
                    </button>
                </div>
            </form>
            {incomesList && isTransactionsSuccess ? (
                <ul>
                    {incomesList.map((income) => (
                        <li key={income.id} className="w-full">
                            <div className="flex w-full items-center py-2  text-sm">
                                <span className="w-[23%] text-center">
                                    {income.name}
                                </span>
                                <span className="w-[23%] text-center">
                                    {income.category}
                                </span>
                                <span className="w-[23%] text-center">
                                    {income.indetifier}
                                </span>
                                <span className="w-[23%] text-center">
                                    ${income.amount}
                                </span>
                                <div className="flex items-center justify-between">
                                    <button className="h-8 w-8 rounded-full p-1 hover:bg-secondary-light ">
                                        <Edit
                                            aria-label="Edit"
                                            className="m-auto h-5 w-5"
                                        />
                                    </button>
                                    <button className="h-8 w-8 rounded-full p-1 hover:bg-secondary-light">
                                        <Delete
                                            aria-label="Delete"
                                            className="m-auto h-5 w-5"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className=" mx-auto w-[95%] border-b-2 border-dark border-opacity-5"></div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="w-full text-center text-dark">
                    {(isTransactionsFetching || isTransactionsLoading) && (
                        <Loading />
                    )}
                    {isTransactionsError &&
                        'Something went wrong. Please try again later.'}
                </div>
            )}
        </div>
    )
}
