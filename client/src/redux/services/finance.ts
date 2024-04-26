import { api } from './api'

export type Transaction = {
    id?: number
    name: string
    amount: number
    currency?: string
    type: string
    description?: string
    category?: string
    indetifier?: string
}

type GetTransactionsQuery = {
    token: string
}

export type GetTransactionsResponse = {
    transactions: Transaction[]
    count: number
    maxPage: number
    totalIncome: number
    totalExpenses: number
    totalAmount: number
}

export const financeApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTransactions: build.query<
            GetTransactionsResponse,
            GetTransactionsQuery
        >({
            query: ({ token }) => ({
                url: `finance/`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                          ...result.transactions.map(
                              ({ id }) =>
                                  ({
                                      type: 'Finance',
                                      id,
                                  }) as const
                          ),
                          { type: 'Finance', id: 'LIST' },
                      ]
                    : [{ type: 'Finance', id: 'LIST' }],
        }),
        addTransaction: build.mutation<
            Transaction,
            { body: Transaction; token: string }
        >({
            query: ({ body, token }) => ({
                url: 'finance/',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body,
            }),
            invalidatesTags: ['Finance'],
        }),
    }),
})

export const { useGetTransactionsQuery, useAddTransactionMutation } = financeApi
