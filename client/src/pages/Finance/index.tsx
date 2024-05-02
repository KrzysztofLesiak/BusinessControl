import { FinanceChart } from '../../features/finance/components/FinanceChart'
import { Incomes } from '../../features/finance/components/Incomes'
import { TotalBalance } from '../../features/finance/components/TotalBalance'
import { TotalExpenses } from '../../features/finance/components/TotalExpenses'
import { TotalIncome } from '../../features/finance/components/TotalIncome'
import { useFinance } from '../../features/finance/hooks/useFinance'

export const Finance = () => {
    const {
        incomeInputs,
        isAddLoading,
        isTransactionsFetching,
        isTransactionsLoading,
        isTransactionsError,
        isTransactionsSuccess,
        transactionsData,
        editIncome,
        editInputs,
        isEditLoading,
        handleIncomeInput,
        handleIncomeSubmit,
        handleEdit,
        handleEditInput,
        handleEditSubmit,
    } = useFinance()

    const { totalAmount, totalIncome, totalExpenses, transactions } =
        transactionsData || {}

    const incomes = transactions?.filter(
        (transaction) => transaction.type === 'IN'
    )

    return (
        <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-6">
            <TotalBalance totalAmount={totalAmount} />
            <TotalIncome totalIncome={totalIncome} />
            <TotalExpenses totalExpenses={totalExpenses} />
            <FinanceChart />
            <Incomes
                incomesList={incomes}
                incomeInputs={incomeInputs}
                isAddLoading={isAddLoading}
                isTransactionsFetching={isTransactionsFetching}
                isTransactionsLoading={isTransactionsLoading}
                isTransactionsError={isTransactionsError}
                isTransactionsSuccess={isTransactionsSuccess}
                editInputs={editInputs}
                editIncome={editIncome}
                handleIncomeInput={handleIncomeInput}
                handleIncomeSubmit={handleIncomeSubmit}
                handleEdit={handleEdit}
                handleEditInput={handleEditInput}
                handleEditSubmit={handleEditSubmit}
                isEditLoading={isEditLoading}
            />
        </div>
    )
}
