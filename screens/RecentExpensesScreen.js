import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext, useEffect } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpense } from '../util/http';

function RecentExpenseScreen() {
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		async function getExpenses() {
			const expenses = await fetchExpense();
			expensesCtx.setExpenses(expenses);
		}

		getExpenses();
	}, []);

	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const dateSevenDaysAgo = getDateMinusDays(today, 7);

		return expense.date > dateSevenDaysAgo;
	});

	return (
		<ExpensesOutput
			expenses={recentExpenses}
			periodName="Last 7 days"
			fallbackText="No recent expenses"
		/>
	);
}

export default RecentExpenseScreen;
