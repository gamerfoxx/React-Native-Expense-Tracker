import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
function ExpensesSummary({ expenses, periodName }) {
	const expensesTotal = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);

	return (
		<View style={styles.container}>
			<Text style={styles.periodName}>{periodName}</Text>
			<Text style={styles.expensesTotal}>${expensesTotal.toFixed(2)}</Text>
		</View>
	);
}

export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: GlobalStyles.colors.primary1,
		borderRadius: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	periodName: {
		fontSize: 14,
		color: GlobalStyles.colors.primary3,
	},
	expensesTotal: {
		fontSize: 18,
		fontWeight: 'bold',
		color: GlobalStyles.colors.primary4,
	},
});
