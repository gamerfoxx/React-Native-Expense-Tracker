import { View } from 'react-native';

import Input from './Input';

function ExpenseForm() {
	function amountChangedHandler() {}

	function dateChangedHandler() {}

	function descriptionChangedHandler() {}

	return (
		<View>
			<Input
				label="Amount"
				textInputConfiguration={{
					keyboardType: 'decimal-pad',
					onChangeText: amountChangedHandler,
				}}
			/>
			<Input
				label="Date"
				textInputConfiguration={{
					placeholder: 'YYYY-MM-DD',
					maxLength: 10,
					onChangeText: dateChangedHandler,
				}}
			/>
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
