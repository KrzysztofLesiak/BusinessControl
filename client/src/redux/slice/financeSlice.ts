import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Transaction } from '../services/finance'

type TransactionStatus = {
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    isFetching: boolean
}

type FinanceState = {
    transactions: Transaction[]
    transactionStatus: TransactionStatus
    count: number
    maxPage: number
    totalIncome: number
    totalExpenses: number
    totalAmount: number
}

const initialState: FinanceState = {
    transactions: [],
    transactionStatus: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isFetching: false,
    },
    count: 0,
    maxPage: 1,
    totalIncome: 0,
    totalExpenses: 0,
    totalAmount: 0,
}

export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        updateTransactions: (state, action: PayloadAction<Transaction[]>) => {
            state.transactions = action.payload
        },
        updateCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        },
        updateMaxPage: (state, action: PayloadAction<number>) => {
            state.maxPage = action.payload
        },
        updateTotalIncome: (state, action: PayloadAction<number>) => {
            state.totalIncome = action.payload
        },
        updateTotalExpenses: (state, action: PayloadAction<number>) => {
            state.totalExpenses = action.payload
        },
        updateTotalAmount: (state, action: PayloadAction<number>) => {
            state.totalAmount = action.payload
        },
        updateStatus: (state, action: PayloadAction<TransactionStatus>) => {
            state.transactionStatus = action.payload
        },
    },
})

export const {
    updateTransactions,
    updateCount,
    updateMaxPage,
    updateTotalIncome,
    updateTotalExpenses,
    updateTotalAmount,
    updateStatus,
} = financeSlice.actions
