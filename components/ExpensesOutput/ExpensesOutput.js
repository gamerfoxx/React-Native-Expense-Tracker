import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSE = [
	{
		id: 'e1',
		description: 'purchase 1',
		amount: 20.99,
		date: new Date('2023-01-12'),
	},
	{
		id: 'e2',
		description: 'purchase 2',
		amount: 28.99,
		date: new Date('2023-08-12'),
	},
	{
		id: 'e3',
		description: 'purchase 3',
		amount: 20.99,
		date: new Date('2023-07-12'),
	},
];
function ExpensesOutput({ expenses, periodName }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={DUMMY_EXPENSE}
				periodName={periodName}
			/>
			<ExpensesList expenses={DUMMY_EXPENSE} />
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
