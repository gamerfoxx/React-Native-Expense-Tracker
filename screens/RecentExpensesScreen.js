import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function RecentExpenseScreen() {
	const [isFetching, setIsFetching] = useState(true);
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		async function getExpenses() {
			setIsFetching(true);
			const expenses = await fetchExpense();
			setIsFetching(false);
			expensesCtx.setExpenses(expenses);
		}

		getExpenses();
	}, []);

	if (isFetching) {
		return <LoadingOverlay />;
	}

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
