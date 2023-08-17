import { StyleSheet, Text, View, FlatList } from 'react-native';

function renderExpenseItem(itemData) {
	return <Text>{itemData.item.description}</Text>;
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
