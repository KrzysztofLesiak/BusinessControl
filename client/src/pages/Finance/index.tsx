import { Loading } from '../../components/Loading'
import { useFinance } from '../../hooks/useFinance'
import { TotalBalance } from './TotalBalance'
import { TotalExpenses } from './TotalExpenses'
import { TotalIncome } from './TotalIncome'

export const Finance = () => {
    const {
        incomeInputs,
        isAddLoading,
        transactionsData,
        handleIncomeInput,
        handleIncomeSubmit,
    } = useFinance()

    const { totalAmount, totalIncome, totalExpenses } = transactionsData || {}

    return (
        <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-6">
            <TotalBalance totalAmount={totalAmount} />
            <TotalIncome totalIncome={totalIncome} />
            <TotalExpenses totalExpenses={totalExpenses} />
        </div>
    )
}
