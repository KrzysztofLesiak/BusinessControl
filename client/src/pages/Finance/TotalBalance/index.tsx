type TotalBalanceProps = {
    totalAmount: number | undefined
}

export const TotalBalance = ({ totalAmount }: TotalBalanceProps) => {
    return (
        <div className="col-span-2 rounded-3xl border-4 border-secondary-light bg-white p-4">
            <h2 className="text-lg font-bold text-quartiary-light">
                Total Balance
            </h2>
            {totalAmount ? (
                <span
                    className={`text-xl ${
                        totalAmount > 0 ? 'text-success' : 'text-error'
                    }`}
                >
                    {totalAmount ? '$ ' + totalAmount : '$____.__'}
                </span>
            ) : (
                <span>$ _____.__</span>
            )}
        </div>
    )
}
