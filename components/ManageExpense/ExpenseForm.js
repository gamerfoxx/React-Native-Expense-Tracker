import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';
import { useState } from 'react';

function ExpenseForm() {
	const [inputValue, setInputValue] = useState({
		amount: '',
		date: '',
		description: '',
	});

	function inputChangeHandler(inputId, enteredValue) {
		setInputValue((currentInputValues) => {
			return {
				...currentInputValues,
				[inputId]: enteredValue,
			};
		});
	}

	return (
		<View style={styles.formContainer}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.amountDateContainer}>
				<Input
					label="Amount"
					style={styles.rowInput}
					textInputConfiguration={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangeHandler.bind(this, 'amount'),
						value: inputValue.amount,
					}}
				/>
				<Input
					label="Date"
					style={styles.rowInput}
					textInputConfiguration={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, 'date'),
						value: inputValue.date,
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfiguration={{
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, 'description'),
					value: inputValue.description,
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
