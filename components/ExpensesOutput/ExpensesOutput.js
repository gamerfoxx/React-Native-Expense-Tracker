import { StyleSheet, View, Text } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

function ExpensesOutput({ expenses, periodName, fallbackText }) {
	let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;
	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	}
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={expenses}
				periodName={periodName}
			/>
			{content}
		</View>
	);
}

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		padding: 30,
		backgroundColor: GlobalStyles.colors.primary7,
		flex: 1,
	},
	fallbackText: {
		color: 'white',
		textAlign: 'center',
		margin: 32,
		fontSize: 18,
	},
});
