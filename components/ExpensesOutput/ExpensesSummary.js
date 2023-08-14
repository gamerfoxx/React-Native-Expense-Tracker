import { StyleSheet, Text, View, FlatList } from 'react-native';
function ExpensesSummary({ expenses, periodName }) {
	const expensesTotal = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);

	return (
		<View>
			<Text>{periodName}</Text>
			<Text>${expensesTotal.toFixed(2)}</Text>
		</View>
	);
}

export default ExpensesSummary;
