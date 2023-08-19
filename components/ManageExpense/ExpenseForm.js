import { Alert, StyleSheet, Text, View } from 'react-native';

import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormatedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

function ExpenseForm({ submitLabel, onCancel, onSubmit, defaultValue }) {
	const [inputs, setInputs] = useState({
		amount: {
			value: defaultValue ? defaultValue.amount.toString() : '',
			isValid: true,
		},
		date: {
			value: defaultValue ? getFormatedDate(defaultValue.date) : '',
			isValid: true,
		},
		description: {
			value: defaultValue ? defaultValue.description : '',
			isValid: true,
		},
	});

	function inputChangeHandler(inputId, enteredValue) {
		setInputs((currentInputs) => {
			return {
				...currentInputs,
				[inputId]: { value: enteredValue, isValid: true },
			};
		});
	}

	function submitHandler() {
		expenseData = {
			amount: +inputs.amount.value,
			date: new Date(inputs.date.value),
			description: inputs.description.value,
		};

		const validAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const validDate =
			expenseData.date.toString().toLowerCase() !== 'invalid date';
		const validDescription = expenseData.description.trim().length > 0;

		if (!validAmount || !validDate || !validDescription) {
			setInputs((currentInputs) => {
				return {
					amount: {
						value: currentInputs.amount.value,
						isValid: validAmount,
					},
					date: {
						value: currentInputs.date.value,
						isValid: validDate,
					},
					description: {
						value: currentInputs.description.value,
						isValid: validDescription,
					},
				};
			});
			return;
		}

		onSubmit(expenseData);
	}

	const formInvalid =
		!inputs.amount.isValid ||
		!inputs.date.isValid ||
		!inputs.description.isValid;

	return (
		<View style={styles.formContainer}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.amountDateContainer}>
				<Input
					label="Amount"
					style={styles.rowInput}
					valid={inputs.amount.isValid}
					textInputConfiguration={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangeHandler.bind(this, 'amount'),
						value: inputs.amount.value,
					}}
				/>
				<Input
					label="Date"
					style={styles.rowInput}
					valid={inputs.date.isValid}
					textInputConfiguration={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, 'date'),
						value: inputs.date.value,
					}}
				/>
			</View>
			<Input
				label="Description"
				valid={inputs.description.isValid}
				textInputConfiguration={{
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, 'description'),
					value: inputs.description.value,
				}}
			/>
			{formInvalid && <Text style={styles.errorText}>Invalid inputs</Text>}
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
	errorText: {
		color: GlobalStyles.colors.error2,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
