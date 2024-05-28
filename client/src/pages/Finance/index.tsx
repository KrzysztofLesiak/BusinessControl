import { Expenses } from '../../features/finance/components/Expenses'
import { FinanceChart } from '../../features/finance/components/FinanceChart'
import { Incomes } from '../../features/finance/components/Incomes'
import { TotalBalance } from '../../features/finance/components/TotalBalance'
import { TotalExpenses } from '../../features/finance/components/TotalExpenses'
import { TotalIncome } from '../../features/finance/components/TotalIncome'
import { useFinance } from '../../features/finance/hooks/useFinance'

export const Finance = () => {
    const { transactionsData } = useFinance()

    const { totalAmount, totalIncome, totalExpenses } = transactionsData || {}

    return (
        <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-6">
            <TotalBalance totalAmount={totalAmount} />
            <TotalIncome totalIncome={totalIncome} />
            <TotalExpenses totalExpenses={totalExpenses} />
            <FinanceChart />
            <Incomes />
            <Expenses />
        </div>
    )
}
