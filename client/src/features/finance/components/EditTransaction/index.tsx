import { ChangeEvent, FormEvent } from 'react'
import { Transaction } from '../../../../redux/services/finance'

type EditTransationProps = {
    income: Transaction
    editIncome: number
    editInputs: Transaction
    handleEditInput: (event: ChangeEvent<HTMLInputElement>) => void
    handleEditSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const EditTransaction = ({
    income,
    editIncome,
    editInputs,
    handleEditInput,
    handleEditSubmit,
}: EditTransationProps) => {
    return (
        <>
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
                    onChange={(event) => handleEditInput(event)}
                />
                <input
                    className="w-[25%] border-r-2 border-dark border-opacity-10 bg-primary-light py-1 pl-2 "
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={editInputs.category}
                    onChange={(event) => handleEditInput(event)}
                />
                <input
                    className="w-[25%] border-r-2 border-dark border-opacity-10 bg-primary-light py-1 pl-2"
                    type="text"
                    name="indetifier"
                    placeholder="Payment ID"
                    value={editInputs.indetifier}
                    onChange={(event) => handleEditInput(event)}
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
                    onChange={(event) => handleEditInput(event)}
                />
                <input type="hidden" name="type" value="IN" />
            </form>
        </>
    )
}
