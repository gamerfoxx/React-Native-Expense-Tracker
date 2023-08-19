import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenseScreen() {
	const [isFetching, setIsFetching] = useState(true);
	const [isError, setIsError] = useState();

	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		async function getExpenses() {
			setIsFetching(true);
			try {
				const expenses = await fetchExpense();
			} catch (err) {
				console.log(err);
				setIsError('an error occured');
			}

			setIsFetching(false);
			expensesCtx.setExpenses(expenses);
		}

		getExpenses();
	}, []);

	function errorHandler() {
		setIsError(null);
	}

	if (isError && !isFetching) {
		return (
			<ErrorOverlay
				message={isError}
				onConfirm={errorHandler}
			/>
		);
	}

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
