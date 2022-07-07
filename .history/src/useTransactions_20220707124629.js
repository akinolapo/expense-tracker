import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackerContext)
    const transactionsPerType = transactions.filter((t) => t.type === title)
    const total = transactionsPerType.reduce( (acc, currVal) => acc += currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({transactionsPerType, total, categories})

    transactionsPerType.forEach
}