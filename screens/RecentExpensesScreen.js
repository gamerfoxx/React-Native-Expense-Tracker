import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
function RecentExpenseScreen() {
	return <ExpensesOutput periodName="Last 7 days" />;
}

export default RecentExpenseScreen;
