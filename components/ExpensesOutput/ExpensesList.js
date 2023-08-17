import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
	return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
		/>
	);
}

export default ExpensesList;

const styles = StyleSheet.create({
	container: {
		padding: 30,
		backgroundColor: GlobalStyles.colors.primary7,
		flex: 1,
	},
});
