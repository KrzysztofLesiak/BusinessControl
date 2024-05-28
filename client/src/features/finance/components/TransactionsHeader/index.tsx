import Filter from '../../../../assets/filter-solid.svg?react'

type TransactionsHeaderProps = {
    title: string
}

export const TransactionsHeader = ({ title }: TransactionsHeaderProps) => {
    return (
        <div className="flex items-center">
            <h2 className="text-3xl">{title}</h2>
            <div className="ml-4 flex rounded-xl bg-secondary-light text-sm">
                <input
                    className="m-1 rounded-lg p-1 pl-4"
                    type="search"
                    placeholder="Search"
                    name="incomeSearch"
                />
                <div className="mx-2 flex items-center">
                    <p className="mr-2">Filter</p>
                    <Filter />
                </div>
            </div>
        </div>
    )
}
