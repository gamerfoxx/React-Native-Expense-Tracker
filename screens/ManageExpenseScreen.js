import { StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';

import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';
import { GlobalStyles } from '../constants/styles';

function ManageExpenseScreen({ route, navigation }) {
	const editedExpenseId = route.params?.expenseId;
	const isEdited = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEdited ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEdited]);

	function deleteExpenseHandler() {}

	function cancelHandler() {}

	function confirmExpenseHandler() {}

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button
					mode="flat"
					onPress={cancelHandler}
					style={styles.button}>
					Cancel
				</Button>
				<Button
					onPress={confirmExpenseHandler}
					style={styles.button}>
					{isEdited ? 'Update' : 'Add'}
				</Button>
			</View>
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
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 10,
	},
});
