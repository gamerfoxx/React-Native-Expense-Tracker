import { StyleSheet, Text, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpenseScreen({ route, navigation }) {
	const expensesCtx = useContext(ExpensesContext);
	const editedExpenseId = route.params?.expenseId;
	const isEdited = !!editedExpenseId;
	const selectedExpense = expensesCtx.expenses.find((expense) => {
		return expense.id === editedExpenseId;
	});

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEdited ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEdited]);

	function deleteExpenseHandler() {
		expensesCtx.deleteExpense(editedExpenseId);
		navigation.goBack();
	}

	function cancelHandler() {
		navigation.goBack();
	}
	function confirmExpenseHandler(expenseData) {
		if (isEdited) {
			expensesCtx.updateExpense(editedExpenseId, expenseData);
		} else {
			expensesCtx.addExpense(expenseData);
		}
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				onCancel={cancelHandler}
				onSubmit={confirmExpenseHandler}
				submitLabel={isEdited ? 'Update' : 'Add'}
				defaultValue={selectedExpense}
			/>

			{isEdited && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						color={GlobalStyles.colors.error2}
						size={35}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		backgroundColor: GlobalStyles.colors.primary7,
	},
	deleteContainer: {
		marginTop: 15,
		padding: 8,
		borderTopWidth: 1,
		borderTopColor: GlobalStyles.colors.primary2,
		alignItems: 'center',
	},
});
