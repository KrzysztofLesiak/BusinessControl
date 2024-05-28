import { Loading } from '../../../../components/Loading'
import { useEdit } from '../../hooks/useEdit'
import { useAppSelector } from '../../../../redux/hooks'
import { useDelete } from '../../hooks/useDelete'
import { AddTransactionForm } from '../AddTransactionForm'

import Filter from '../../../../assets/filter-solid.svg?react'
import Edit from '../../../../assets/edit.svg?react'
import Delete from '../../../../assets/delete.svg?react'
import Loader from '../../../../assets/spinner-solid.svg?react'
import Check from '../../../../assets/check-solid.svg?react'
import Xmark from '../../../../assets/xmark-solid.svg?react'

export const Incomes = () => {
    const { transactions, transactionStatus } = useAppSelector(
        (state) => state.finance
    )
    const {
        editIncome,
        editInputs,
        isEditLoading,
        handleEdit,
        handleEditInput,
        handleEditSubmit,
    } = useEdit()
    const {
        isDeleteLoading,
        isDeleteVisible,
        deleteIncome,
        handleDelete,
        handleDeleteSubmit,
    } = useDelete()

    const incomesList = transactions?.filter(
        (transaction) => transaction.type === 'IN'
    )

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
            <AddTransactionForm type="IN" />
            {incomesList && transactionStatus.isSuccess ? (
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
                                        className={`  h-8 w-8 rounded-full p-1 hover:bg-error hover:bg-opacity-20`}
                                        onClick={() => handleDelete(income.id)}
                                    >
                                        {deleteIncome === income.id &&
                                        isDeleteVisible ? (
                                            <Xmark
                                                aria-label="Cancel"
                                                className="m-auto h-5 w-5"
                                            />
                                        ) : (
                                            <Delete
                                                aria-label="Delete"
                                                className="m-auto h-5 w-5"
                                            />
                                        )}
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
                            {deleteIncome === income.id && (
                                <div
                                    className={`${
                                        isDeleteVisible ? 'h-14' : 'h-0'
                                    } w-full overflow-hidden text-center text-sm transition-all`}
                                >
                                    <span className="text-sm">
                                        Do you want to delete this income?
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleDeleteSubmit(income.id)
                                        }
                                        className="mx-2 my-auto h-6 w-6 rounded-full bg-success bg-opacity-20 p-1"
                                    >
                                        {isDeleteLoading ? (
                                            <Loader
                                                aria-label="Loading"
                                                className="m-auto h-4 w-4 animate-spin"
                                            />
                                        ) : (
                                            <Check className="m-auto h-4 w-4" />
                                        )}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(income.id)}
                                        className="h-6 w-6 rounded-full bg-error bg-opacity-20 p-1"
                                    >
                                        <Xmark className="m-auto h-4 w-4" />
                                    </button>
                                </div>
                            )}
                            <div className=" mx-auto w-[100%] border-b-2 border-dark border-opacity-5"></div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="w-full text-center text-dark">
                    {(transactionStatus.isFetching ||
                        transactionStatus.isLoading) && <Loading />}
                    {transactionStatus.isError &&
                        'Something went wrong. Please try again later.'}
                </div>
            )}
        </div>
    )
}
