import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'

import {
    GetTransactionsResponse,
    Transaction,
    useAddTransactionMutation,
    useGetTransactionsQuery,
} from '../redux/services/finance'

type UseFinanceData = {
    incomeInputs: Transaction
    transactions: Transaction[] | undefined
    isAddLoading: boolean
    transactionsData: GetTransactionsResponse | undefined
    isTransactionsLoading: boolean
    isTransactionsSuccess: boolean
    isTransactionsError: boolean
    isTransactionsFetching: boolean
    handleIncomeInput: (event: ChangeEvent<HTMLInputElement>) => void
    handleIncomeSelect: (event: ChangeEvent<HTMLSelectElement>) => void
    handleIncomeSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const useFinance = (): UseFinanceData => {
    const { token } = useAppSelector((state) => state.users)

    const [incomeInputs, setIncomeInputs] = useState<Transaction>({
        name: '',
        amount: 0,
        type: 'IN',
        description: '',
        category: 'test',
        indetifier: '',
    })
    const [transactions, setTransactions] = useState<Transaction[] | undefined>(
        []
    )

    const {
        data: transactionsData,
        isLoading: isTransactionsLoading,
        isSuccess: isTransactionsSuccess,
        isError: isTransactionsError,
        isFetching: isTransactionsFetching,
    } = useGetTransactionsQuery({ token })

    const [
        addTransaction,
        { isSuccess: isAddSuccess, isLoading: isAddLoading },
    ] = useAddTransactionMutation()

    const handleIncomeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setIncomeInputs((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleIncomeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target

        setIncomeInputs((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleIncomeSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        addTransaction({ body: incomeInputs, token })

        if (isAddSuccess) console.log(incomeInputs)
    }

    useEffect(() => {
        setTransactions(transactionsData?.transactions)
    }, [transactionsData])

    return {
        incomeInputs,
        transactions,
        isAddLoading,
        transactionsData,
        isTransactionsLoading,
        isTransactionsSuccess,
        isTransactionsError,
        isTransactionsFetching,
        handleIncomeInput,
        handleIncomeSelect,
        handleIncomeSubmit,
    }
}
