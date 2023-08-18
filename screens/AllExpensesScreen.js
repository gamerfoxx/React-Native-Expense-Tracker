import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';

function AllExpensesScreen() {
	const expensesContext = useContext(ExpensesContext);

	return (
		<ExpensesOutput
			expenses={expensesContext.expenses}
			periodName="total"
		/>
	);
}

export default AllExpensesScreen;
