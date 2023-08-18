import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, textInputConfiguration }) {
	// textInputConfiguration must be the same values as expected by TextInput

	let inputStyles = [styles.input];
	if (textInputConfiguration && textInputConfiguration.multiline) {
		inputStyles.push(styles.inputMultiline);
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.labelText}>{label}</Text>
			<TextInput
				style={inputStyles}
				{...textInputConfiguration}
			/>
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 5,
		marginVertical: 6,
	},
	labelText: {
		fontSize: 12,
		color: GlobalStyles.colors.primary2,
		marginBottom: 5,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary2,
		color: GlobalStyles.colors.primary7,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: 'top',
	},
});
