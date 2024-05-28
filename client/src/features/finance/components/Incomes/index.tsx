import { useAppSelector } from '../../../../redux/hooks'
import { AddTransactionForm } from '../AddTransactionForm'

import { TransactionsHeader } from '../TransactionsHeader'
import { TransactionsList } from '../TransactionsList'

export const Incomes = () => {
    const { transactions } = useAppSelector((state) => state.finance)

    const incomes = transactions?.filter(
        (transaction) => transaction.type === 'IN'
    )

    return (
        <div className="col-span-3 w-full rounded-3xl border-4 border-secondary-light bg-white p-4 transition-all">
            <TransactionsHeader />
            <AddTransactionForm type="IN" />
            <TransactionsList transactions={incomes} />
        </div>
    )
}
