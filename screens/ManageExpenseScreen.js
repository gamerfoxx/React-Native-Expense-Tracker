import { StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';

function ManageExpenseScreen({ route, navigation }) {
	const editedExpenseId = route.params?.expenseId;
	const isEdited = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEdited ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEdited]);

	return <Text>ManageExpenseScreen</Text>;
}

export default ManageExpenseScreen;
