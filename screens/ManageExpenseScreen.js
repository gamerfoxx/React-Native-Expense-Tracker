import { StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';

import IconButton from '../components/UI/IconButton';
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

	return (
		<View style={styles.container}>
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
