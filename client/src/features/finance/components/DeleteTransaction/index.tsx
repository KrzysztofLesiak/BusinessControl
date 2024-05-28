import { Transaction } from '../../../../redux/services/finance'

import Loader from '../../../../assets/spinner-solid.svg?react'
import Check from '../../../../assets/check-solid.svg?react'
import Xmark from '../../../../assets/xmark-solid.svg?react'

type DeleteTransactionProps = {
    income: Transaction
    deleteIncome: number
    isDeleteVisible: boolean
    isDeleteLoading: boolean
    handleDelete: (id: number | undefined) => void
    handleDeleteSubmit: (id: number | undefined) => void
}
export const DeleteTransaction = ({
    income,
    isDeleteVisible,
    isDeleteLoading,
    deleteIncome,
    handleDelete,
    handleDeleteSubmit,
}: DeleteTransactionProps) => {
    return (
        <>
            {deleteIncome === income.id && (
                <div
                    className={`${
                        isDeleteVisible ? 'h-10' : 'h-0'
                    } w-full overflow-hidden text-center text-sm transition-all`}
                >
                    <span className="text-sm">
                        Do you want to delete this income?
                    </span>
                    <button
                        onClick={() => handleDeleteSubmit(income.id)}
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
        </>
    )
}
