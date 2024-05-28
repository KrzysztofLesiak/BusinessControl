import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

import {
    GetTransactionsResponse,
    Transaction,
    useAddTransactionMutation,
    useGetTransactionsQuery,
} from '../../../redux/services/finance'
import {
    updateStatus,
    updateTransactions,
} from '../../../redux/slice/financeSlice'

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
    handleIncomeSubmit: (
        event: FormEvent<HTMLFormElement>,
        type: string
    ) => void
}

export const useFinance = (): UseFinanceData => {
    const { token } = useAppSelector((state) => state.users)
    const { transactions } = useAppSelector((state) => state.finance)
    const dipsatch = useAppDispatch()

    const [incomeInputs, setIncomeInputs] = useState<Transaction>({
        name: '',
        amount: '',
        type: '',
        description: '',
        category: '',
        indetifier: '',
    })

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

    const handleIncomeSubmit = (
        event: FormEvent<HTMLFormElement>,
        type: string
    ) => {
        event.preventDefault()

        addTransaction({ body: { ...incomeInputs, type }, token })
    }

    useEffect(() => {
        if (transactionsData?.transactions)
            dipsatch(updateTransactions(transactionsData?.transactions))
    }, [dipsatch, transactionsData])

    useEffect(() => {
        if (isAddSuccess)
            setIncomeInputs({
                name: '',
                amount: '',
                category: '',
                indetifier: '',
                type: '',
                description: '',
            })
    }, [isAddSuccess])

    useEffect(() => {
        const status = {
            isLoading: isTransactionsLoading,
            isSuccess: isTransactionsSuccess,
            isError: isTransactionsError,
            isFetching: isTransactionsFetching,
        }

        dipsatch(updateStatus(status))
    }, [
        isTransactionsError,
        isTransactionsSuccess,
        isTransactionsLoading,
        isTransactionsFetching,
        dipsatch,
    ])

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
