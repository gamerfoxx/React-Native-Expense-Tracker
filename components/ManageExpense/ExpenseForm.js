import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';

function ExpenseForm({ submitLabel, onCancel, onSubmit }) {
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

	function submitHandler() {
		expenseData = {
			amount: +inputValue.amount,
			date: new Date(inputValue.date),
			description: inputValue.description,
		};

		onSubmit(expenseData);
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
			<View style={styles.buttonContainer}>
				<Button
					mode="flat"
					onPress={onCancel}
					style={styles.button}>
					Cancel
				</Button>
				<Button
					onPress={submitHandler}
					style={styles.button}>
					{submitLabel}
				</Button>
			</View>
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
