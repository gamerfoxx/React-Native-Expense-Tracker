import { StyleSheet, Text, View } from 'react-native';
import { useContext, useLayoutEffect, useState } from 'react';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { storeExpense, updateExpense, deleteExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function ManageExpenseScreen({ route, navigation }) {
	const [isSubmitting, setIsSubmitting] = useState(false);

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

	async function deleteExpenseHandler() {
		setIsSubmitting(true);
		expensesCtx.deleteExpense(editedExpenseId);
		await deleteExpense(editedExpenseId);
		setIsSubmitting(false);
		navigation.goBack();
	}

	function cancelHandler() {
		navigation.goBack();
	}
	async function confirmExpenseHandler(expenseData) {
		setIsSubmitting(true);
		if (isEdited) {
			expensesCtx.updateExpense(editedExpenseId, expenseData);
			await updateExpense(editedExpenseId, expenseData);
		} else {
			const id = await storeExpense(expenseData);
			expensesCtx.addExpense({ ...expenseData, id: id });
		}
		setIsSubmitting(false);
		navigation.goBack();
	}
	if (isSubmitting) {
		return <LoadingOverlay />;
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
