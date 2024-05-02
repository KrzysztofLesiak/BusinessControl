import { Loading } from '../../../../components/Loading'
import { Transaction } from '../../../../redux/services/finance'

import Filter from '../../../../assets/filter-solid.svg?react'
import Add from '../../../../assets/xmark-solid.svg?react'
import Edit from '../../../../assets/edit.svg?react'
import Delete from '../../../../assets/delete.svg?react'
import Loader from '../../../../assets/spinner-solid.svg?react'
import Check from '../../../../assets/check-solid.svg?react'
import Xmark from '../../../../assets/xmark-solid.svg?react'

type IncomeProps = {
    incomesList: Transaction[] | undefined
    incomeInputs: Transaction
    isAddLoading: boolean
    isTransactionsFetching: boolean
    isTransactionsLoading: boolean
    isTransactionsError: boolean
    isTransactionsSuccess: boolean
    editIncome: number
    editInputs: Transaction
    isEditLoading: boolean
    handleIncomeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleIncomeSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    handleEdit: (id: number | undefined) => void
    handleEditInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleEditSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Incomes = ({
    incomesList,
    incomeInputs,
    isAddLoading,
    isTransactionsFetching,
    isTransactionsLoading,
    isTransactionsError,
    isTransactionsSuccess,
    editIncome,
    editInputs,
    isEditLoading,
    handleIncomeInput,
    handleIncomeSubmit,
    handleEdit,
    handleEditInput,
    handleEditSubmit,
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
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={incomeInputs.name}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-2 outline-none"
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={incomeInputs.category}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-2 outline-none"
                    type="text"
                    name="indetifier"
                    placeholder="Payment ID"
                    value={incomeInputs.indetifier}
                    onChange={(event) => handleIncomeInput(event)}
                />
                <input
                    className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-2 outline-none"
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
                            <div className="relative flex w-full items-center  py-2 pr-2 text-sm">
                                <span className="w-[22%] pl-2">
                                    {income.name}
                                </span>
                                <span className="w-[22%] pl-2">
                                    {income.category}
                                </span>
                                <span className="w-[22%] pl-2">
                                    {income.indetifier}
                                </span>
                                <span className="w-[22%] pl-2">
                                    ${income.amount}
                                </span>
                                <div
                                    className={`${
                                        editIncome === income.id
                                            ? 'w-0'
                                            : 'w-16'
                                    } flex items-center justify-between overflow-hidden transition-all`}
                                >
                                    <button
                                        className="h-8 w-8 rounded-full p-1 hover:bg-secondary-light"
                                        onClick={() => handleEdit(income.id)}
                                    >
                                        <Edit
                                            aria-label="Edit"
                                            className="m-auto h-5 w-5"
                                        />
                                    </button>
                                    <button
                                        className={` h-8 w-8 rounded-full p-1 hover:bg-secondary-light`}
                                    >
                                        <Delete
                                            aria-label="Delete"
                                            className="m-auto h-5 w-5"
                                        />
                                    </button>
                                </div>

                                <form
                                    id="editIncomeForm"
                                    className={`${
                                        editIncome === income.id ? '' : 'hidden'
                                    } absolute flex h-full w-[86%] items-center bg-primary-light py-2`}
                                    onSubmit={handleEditSubmit}
                                >
                                    <input
                                        className="w-[26%] border-r-2 border-dark border-opacity-10 bg-primary-light py-1 pl-2"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={editInputs.name}
                                        onChange={(event) =>
                                            handleEditInput(event)
                                        }
                                    />
                                    <input
                                        className="w-[25%] border-r-2 border-dark border-opacity-10 bg-primary-light py-1 pl-2 "
                                        type="text"
                                        name="category"
                                        placeholder="Category"
                                        value={editInputs.category}
                                        onChange={(event) =>
                                            handleEditInput(event)
                                        }
                                    />
                                    <input
                                        className="w-[25%] border-r-2 border-dark border-opacity-10 bg-primary-light py-1 pl-2"
                                        type="text"
                                        name="indetifier"
                                        placeholder="Payment ID"
                                        value={editInputs.indetifier}
                                        onChange={(event) =>
                                            handleEditInput(event)
                                        }
                                    />
                                    <input
                                        className="w-[25%] bg-primary-light py-1 pl-2"
                                        type="number"
                                        name="amount"
                                        placeholder="Amount"
                                        step="0.1"
                                        min="0"
                                        prefix="$"
                                        value={editInputs.amount}
                                        onChange={(event) =>
                                            handleEditInput(event)
                                        }
                                    />
                                    <input
                                        type="hidden"
                                        name="type"
                                        value="IN"
                                    />
                                </form>
                                <div
                                    className={`${
                                        editIncome === income.id
                                            ? 'w-16'
                                            : 'w-0'
                                    } flex items-center justify-between overflow-hidden transition-all`}
                                >
                                    <button
                                        type="submit"
                                        form="editIncomeForm"
                                        className="h-8 w-8 rounded-full p-1 hover:bg-secondary-light"
                                        disabled={isEditLoading}
                                    >
                                        {isEditLoading ? (
                                            <Loader
                                                aria-label="Loading"
                                                className="m-auto h-5 w-5 animate-spin"
                                            />
                                        ) : (
                                            <Check
                                                aria-label="Save"
                                                className="m-auto h-5 w-5"
                                            />
                                        )}
                                    </button>
                                    <button
                                        className={` h-8 w-8 rounded-full p-1 hover:bg-secondary-light`}
                                        onClick={() => handleEdit(income.id)}
                                    >
                                        <Xmark
                                            aria-label="Cancel"
                                            className="m-auto h-5 w-5"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className=" mx-auto w-[100%] border-b-2 border-dark border-opacity-5"></div>
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
