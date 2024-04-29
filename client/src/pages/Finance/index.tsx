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
            <form onSubmit={handleIncomeSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={incomeInputs.name}
                        onChange={(event) => handleIncomeInput(event)}
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        step="0.1"
                        min="0"
                        value={incomeInputs.amount}
                        onChange={(event) => handleIncomeInput(event)}
                    />
                </label>
                <input type="hidden" name="type" value="IN" />
                <label>
                    Description:
                    <input
                        type="textarea"
                        name="description"
                        value={incomeInputs.description}
                        onChange={(event) => handleIncomeInput(event)}
                    />
                </label>
                <label>
                    Indetifier
                    <input
                        type="text"
                        name="indetifier"
                        value={incomeInputs.indetifier}
                        onChange={(event) => handleIncomeInput(event)}
                    />
                </label>
                <button type="submit">
                    {isAddLoading ? <Loading /> : 'Add Income'}
                </button>
            </form>
        </div>
    )
}
