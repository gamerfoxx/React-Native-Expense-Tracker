import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
function RecentExpenseScreen() {
	const expensesCtx = useContext(ExpensesContext);

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
