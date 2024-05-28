import { Transaction } from '../../../../redux/services/finance'

import Edit from '../../../../assets/edit.svg?react'
import Delete from '../../../../assets/delete.svg?react'
import Xmark from '../../../../assets/xmark-solid.svg?react'
import Loader from '../../../../assets/spinner-solid.svg?react'
import Check from '../../../../assets/check-solid.svg?react'

type TransactionButtonsProps = {
    type: string
    income: Transaction
    deleteIncome: number
    editIncome: number
    isDeleteVisible: boolean
    isEditLoading: boolean
    handleDelete: (id: number | undefined) => void
    handleEdit: (id: number | undefined) => void
}

export const TransactionButtons = ({
    type,
    income,
    deleteIncome,
    editIncome,
    isDeleteVisible,
    isEditLoading,
    handleDelete,
    handleEdit,
}: TransactionButtonsProps) => {
    return (
        <>
            <div
                className={`${
                    editIncome === income.id ? 'w-0' : 'w-16'
                } flex items-center justify-between overflow-hidden transition-all`}
            >
                <button
                    className="h-8 w-8 rounded-full p-1 hover:bg-secondary-light"
                    onClick={() => handleEdit(income.id)}
                >
                    <Edit aria-label="Edit" className="m-auto h-5 w-5" />
                </button>
                <button
                    className={`  h-8 w-8 rounded-full p-1 hover:bg-error hover:bg-opacity-20`}
                    onClick={() => handleDelete(income.id)}
                >
                    {deleteIncome === income.id && isDeleteVisible ? (
                        <Xmark aria-label="Cancel" className="m-auto h-5 w-5" />
                    ) : (
                        <Delete
                            aria-label="Delete"
                            className="m-auto h-5 w-5"
                        />
                    )}
                </button>
            </div>
            <div
                className={`${
                    editIncome === income.id ? 'w-16' : 'w-0'
                } flex items-center justify-between overflow-hidden transition-all`}
            >
                <button
                    type="submit"
                    form={`editIncomeForm${type}`}
                    className="h-8 w-8 rounded-full p-1 hover:bg-secondary-light"
                    disabled={isEditLoading}
                >
                    {isEditLoading ? (
                        <Loader
                            aria-label="Loading"
                            className="m-auto h-5 w-5 animate-spin"
                        />
                    ) : (
                        <Check aria-label="Save" className="m-auto h-5 w-5" />
                    )}
                </button>
                <button
                    className={` h-8 w-8 rounded-full p-1 hover:bg-secondary-light`}
                    onClick={() => handleEdit(income.id)}
                >
                    <Xmark aria-label="Cancel" className="m-auto h-5 w-5" />
                </button>
            </div>
        </>
    )
}
