import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';

function ExpenseForm() {
	function amountChangedHandler() {}

	function dateChangedHandler() {}

	function descriptionChangedHandler() {}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.amountDateContainer}>
				<Input
					label="Amount"
					style={styles.rowInput}
					textInputConfiguration={{
						keyboardType: 'decimal-pad',
						onChangeText: amountChangedHandler,
					}}
				/>
				<Input
					label="Date"
					style={styles.rowInput}
					textInputConfiguration={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: dateChangedHandler,
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfiguration={{
					multiline: true,
					onChangeText: descriptionChangedHandler,
				}}
			/>
		</View>
	);
}

export default ExpenseForm;

const styles = StyleSheet.create({
	amountDateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rowInput: {
		flex: 1,
	},
	formContainer: {
		marginTop: 30,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		marginVertical: 20,
		textAlign: 'center',
	},
});
