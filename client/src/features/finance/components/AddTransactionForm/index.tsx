import Loader from '../../../../assets/spinner-solid.svg?react'
import Add from '../../../../assets/xmark-solid.svg?react'
import { useEffect } from 'react'
import { useFinance } from '../../hooks/useFinance'

type AddTransactionFormProps = {
    type: string
}
export const AddTransactionForm = ({ type }: AddTransactionFormProps) => {
    const {
        incomeInputs,
        isAddLoading,
        setIncomeInputs,
        handleIncomeInput,
        handleIncomeSubmit,
    } = useFinance()

    useEffect(() => {
        setIncomeInputs((prev) => ({ ...prev, type: type }))
    }, [setIncomeInputs, type])

    return (
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
                onChange={handleIncomeInput}
            />
            <input
                className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-2 outline-none"
                type="text"
                name="category"
                placeholder="Category"
                value={incomeInputs.category}
                onChange={handleIncomeInput}
            />
            <input
                className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-2 outline-none"
                type="text"
                name="indetifier"
                placeholder="Payment ID"
                value={incomeInputs.indetifier}
                onChange={handleIncomeInput}
            />
            <input
                className="w-[22%] border-r-2 border-dark border-opacity-10 bg-[#F4F4F4] pl-2 outline-none"
                type="number"
                name="amount"
                placeholder="Amount"
                step="0.1"
                min="0"
                value={incomeInputs.amount}
                onChange={handleIncomeInput}
            />
            <input type="hidden" name="type" value={type} />
            <div className="w-[12%] text-center">
                <button
                    type="submit"
                    className="h-6 w-6 rounded-full hover:bg-dark hover:bg-opacity-20"
                    disabled={isAddLoading}
                    aria-label="Add Income"
                >
                    {isAddLoading && incomeInputs.type === type ? (
                        <Loader className="m-auto h-4 w-4 animate-spin" />
                    ) : (
                        <Add className="m-auto h-4 w-4 rotate-45" />
                    )}
                </button>
            </div>
        </form>
    )
}
