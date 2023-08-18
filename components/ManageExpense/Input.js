import { View, Text, TextInput } from 'react-native';

function Input({ label, textInputConfiguration }) {
	// textInputConfiguration must be the same values as expected by TextInput
	return (
		<View>
			<Text>{label}</Text>
			<TextInput {...textInputConfiguration} />
		</View>
	);
}

export default Input;
