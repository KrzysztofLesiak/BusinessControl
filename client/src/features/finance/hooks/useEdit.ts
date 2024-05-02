import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {
    Transaction,
    useEditTransactionMutation,
} from '../../../redux/services/finance'
import { useAppSelector } from '../../../redux/hooks'

type UseEditData = {
    editIncome: number
    editInputs: Transaction
    isEditLoading: boolean
    handleEdit: (id: number | undefined) => void
    handleEditInput: (event: ChangeEvent<HTMLInputElement>) => void
    handleEditSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const useEdit = (): UseEditData => {
    const { token } = useAppSelector((state) => state.users)
    const { transactions, transactionStatus } = useAppSelector(
        (state) => state.finance
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

    const [
        editTransaction,
        { isSuccess: isEditSuccess, isLoading: isEditLoading },
    ] = useEditTransactionMutation()

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
        if (
            isEditSuccess &&
            !transactionStatus.isFetching &&
            !transactionStatus.isLoading &&
            transactionStatus.isSuccess
        ) {
            setTimeout(() => {
                setEditIncome(-1)
                setEditInputs({
                    id: -1,
                    name: '',
                    amount: '',
                    category: '',
                    indetifier: '',
                    type: '',
                })
            }, 200)
        }
    }, [
        isEditSuccess,
        transactionStatus.isFetching,
        transactionStatus.isSuccess,
        transactionStatus.isLoading,
    ])

    return {
        editIncome,
        editInputs,
        isEditLoading,
        handleEdit,
        handleEditInput,
        handleEditSubmit,
    }
}
