import { Transaction } from '../../../../redux/services/finance'
import { Loading } from '../../../../components/Loading'

import { useEdit } from '../../hooks/useEdit'
import { useDelete } from '../../hooks/useDelete'
import { useAppSelector } from '../../../../redux/hooks'
import { EditTransaction } from '../EditTransaction'
import { TransactionButtons } from '../TransactionButtons'
import { DeleteTransaction } from '../DeleteTransaction'

type TransactionListProps = {
    transactions: Transaction[]
}
export const TransactionsList = ({ transactions }: TransactionListProps) => {
    const { transactionStatus } = useAppSelector((state) => state.finance)

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

    return (
        <>
            {transactions && transactionStatus.isSuccess ? (
                <ul>
                    {transactions.map((income) => (
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
                                <TransactionButtons
                                    income={income}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                    deleteIncome={deleteIncome}
                                    editIncome={editIncome}
                                    isDeleteVisible={isDeleteVisible}
                                    isEditLoading={isEditLoading}
                                />
                                <EditTransaction
                                    income={income}
                                    editIncome={editIncome}
                                    editInputs={editInputs}
                                    handleEditInput={handleEditInput}
                                    handleEditSubmit={handleEditSubmit}
                                />
                            </div>
                            <DeleteTransaction
                                income={income}
                                handleDeleteSubmit={handleDeleteSubmit}
                                isDeleteLoading={isDeleteLoading}
                                isDeleteVisible={isDeleteVisible}
                                deleteIncome={deleteIncome}
                                handleDelete={handleDelete}
                            />
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
        </>
    )
}
