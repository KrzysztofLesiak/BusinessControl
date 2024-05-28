import { useAppSelector } from '../../../../redux/hooks'
import { AddTransactionForm } from '../AddTransactionForm'
import { TransactionsHeader } from '../TransactionsHeader'
import { TransactionsList } from '../TransactionsList'

export const Expenses = () => {
    const { transactions } = useAppSelector((state) => state.finance)

    const incomes = transactions?.filter(
        (transaction) => transaction.type === 'EX'
    )

    return (
        <div className="col-span-3 w-full rounded-3xl border-4 border-secondary-light bg-white p-4 transition-all">
            <TransactionsHeader title="Expenses" />
            <AddTransactionForm type="EX" />
            <TransactionsList transactions={incomes} type="EX" />
        </div>
    )
}
