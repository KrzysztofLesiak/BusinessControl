import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { useDeleteTransactionMutation } from '../../../redux/services/finance'

type UseDeleteData = {
    isDeleteLoading: boolean
    deleteIncome: number
    isDeleteVisible: boolean
    handleDelete: (id: number | undefined) => void
    handleDeleteSubmit: (id: number | undefined) => void
}

export const useDelete = (): UseDeleteData => {
    const { token } = useAppSelector((state) => state.users)
    const [deleteIncome, setDeleteIncome] = useState<number>(-1)
    const [isDeleteVisible, setIsDeleteVisible] = useState<boolean>(false)

    const [
        deleteTransaction,
        { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
    ] = useDeleteTransactionMutation()

    const handleDelete = (id: number | undefined) => {
        if (id !== deleteIncome) {
            setDeleteIncome(id || -1)
        } else {
            setIsDeleteVisible(false)
            setTimeout(() => setDeleteIncome(-1), 300)
        }
    }

    const handleDeleteSubmit = (id: number | undefined) => {
        if (id && !isDeleteLoading) {
            deleteTransaction({ id, token })
        }
    }

    useEffect(() => {
        deleteIncome !== -1
            ? setIsDeleteVisible(true)
            : setIsDeleteVisible(false)
    }, [deleteIncome])

    useEffect(() => {
        if (isDeleteSuccess) {
            setIsDeleteVisible(false)
            setDeleteIncome(-1)
        }
    }, [isDeleteSuccess])

    return {
        isDeleteLoading,
        deleteIncome,
        isDeleteVisible,
        handleDelete,
        handleDeleteSubmit,
    }
}
