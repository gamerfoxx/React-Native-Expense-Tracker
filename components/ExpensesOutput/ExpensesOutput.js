import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

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
		<View>
			<ExpensesSummary
				expenses={DUMMY_EXPENSE}
				periodName={periodName}
			/>
			<ExpensesList expenses={DUMMY_EXPENSE} />
		</View>
	);
}

export default ExpensesOutput;
