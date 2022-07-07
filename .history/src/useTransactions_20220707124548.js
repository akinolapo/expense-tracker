import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackerContext)
    const tr = transactions.filter((t) => t.type === title)
    const total = tr.reduce( (acc, currVal) => acc += currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({tr, total, categories})
}