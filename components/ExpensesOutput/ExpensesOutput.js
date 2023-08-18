import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

function ExpensesOutput({ expenses, periodName }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={expenses}
				periodName={periodName}
			/>
			<ExpensesList expenses={expenses} />
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
});
