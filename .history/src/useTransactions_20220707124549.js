import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackerContext)
    const tra = transactions.filter((t) => t.type === title)
    const total = tra.reduce( (acc, currVal) => acc += currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({tra, total, categories})
}