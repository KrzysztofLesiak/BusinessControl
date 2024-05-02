import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppSelector } from '../../../redux/hooks'

import {
    GetTransactionsResponse,
    Transaction,
    useAddTransactionMutation,
    useGetTransactionsQuery,
    useEditTransactionMutation,
} from '../../../redux/services/finance'

type UseFinanceData = {
    incomeInputs: Transaction
    transactions: Transaction[] | undefined
    isAddLoading: boolean
    transactionsData: GetTransactionsResponse | undefined
    isTransactionsLoading: boolean
    isTransactionsSuccess: boolean
    isTransactionsError: boolean
    isTransactionsFetching: boolean
    editIncome: number
    editInputs: Transaction
    isEditLoading: boolean
    handleIncomeInput: (event: ChangeEvent<HTMLInputElement>) => void
    handleIncomeSelect: (event: ChangeEvent<HTMLSelectElement>) => void
    handleIncomeSubmit: (event: FormEvent<HTMLFormElement>) => void
    handleEdit: (id: number | undefined) => void
    handleEditInput: (event: ChangeEvent<HTMLInputElement>) => void
    handleEditSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const useFinance = (): UseFinanceData => {
    const { token } = useAppSelector((state) => state.users)

    const [incomeInputs, setIncomeInputs] = useState<Transaction>({
        name: '',
        amount: '',
        type: 'IN',
        description: '',
        category: '',
        indetifier: '',
    })
    const [transactions, setTransactions] = useState<Transaction[] | undefined>(
        []
    )
    const [editIncome, setEditIncome] = useState<number>(-1)
    const [editInputs, setEditInputs] = useState<Transaction>({
        id: -1,
        name: '',
        category: '',
        indetifier: '',
        amount: '',
        type: '',
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

    const [
        editTransaction,
        { isSuccess: isEditSuccess, isLoading: isEditLoading },
    ] = useEditTransactionMutation()

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
    }

    const handleEdit = (id: number | undefined) => {
        if (id !== editIncome) {
            setEditIncome(id || -1)
            setEditInputs(
                transactions?.filter(
                    (transaction) => transaction.id === id
                )[0] || {
                    id: -1,
                    name: '',
                    category: '',
                    indetifier: '',
                    amount: '',
                    type: '',
                }
            )
        } else {
            setEditIncome(-1)
            setEditInputs({
                id: -1,
                name: '',
                category: '',
                indetifier: '',
                amount: '',
                type: '',
            })
        }
    }

    const handleEditInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setEditInputs((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleEditSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        editTransaction({ body: editInputs, token })
    }

    useEffect(() => {
        setTransactions(transactionsData?.transactions)
    }, [transactionsData])

    useEffect(() => {
        if (isAddSuccess)
            setIncomeInputs({
                name: '',
                amount: '',
                category: '',
                indetifier: '',
                type: 'IN',
                description: '',
            })
    }, [isAddSuccess])

    useEffect(() => {
        if (isEditSuccess && !isTransactionsFetching) {
            setEditIncome(-1)
            setEditInputs({
                id: -1,
                name: '',
                amount: '',
                category: '',
                indetifier: '',
                type: '',
            })
        }
    }, [isEditSuccess, isTransactionsFetching])

    return {
        incomeInputs,
        transactions,
        isAddLoading,
        transactionsData,
        isTransactionsLoading,
        isTransactionsSuccess,
        isTransactionsError,
        isTransactionsFetching,
        editIncome,
        editInputs,
        isEditLoading,
        handleIncomeInput,
        handleIncomeSelect,
        handleIncomeSubmit,
        handleEdit,
        handleEditInput,
        handleEditSubmit,
    }
}
