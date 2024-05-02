import { useFinance } from '../../hooks/useFinance'
import { TotalBalance } from './TotalBalance'
import { TotalExpenses } from './TotalExpenses'
import { TotalIncome } from './TotalIncome'
import { FinanceChart } from './FinanceChart'
import { Incomes } from './Incomes'

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
